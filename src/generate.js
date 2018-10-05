const childProcess = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const log = require('extra-log');
const path = require('path');

const sections = [
  require('../src/sections/navigation.json'),
  // other sections
];

const NEW_LINE = '\n';
const GITHUB_OAUTH_TOKEN = process.env.GITHUB_OAUTH_TOKEN;

if (!GITHUB_OAUTH_TOKEN) {
  log.error(`
GITHUB_OAUTH_TOKEN environment variables is not set.
Get it using the following manual
  https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
and set it before running the script
  export GITHUB_OAUTH_TOKEN=__VALUE__
`);
  process.exit(-1);
}

const getMd5 = (str) => crypto.createHash('md5').update(str).digest('hex');

const getCacheFilePath = (cmd) => path.join(__dirname, 'cache', getMd5(cmd));

const exec = (cmd) => {
  const cacheFile = getCacheFilePath(cmd);

  return fs.existsSync(cacheFile) ?
    fs.readFileSync(cacheFile, 'utf8') :
    childProcess.execSync(cmd).toString();
};

const saveCache = (cmd, data) => {
  const cacheFile = getCacheFilePath(cmd);
  fs.writeFileSync(cacheFile, data, 'utf8');
};

const getProjectInfo = (project) => {
  // For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
  const cmd = `curl \
--silent 'https://api.github.com/repos/${project}' \
-H 'Accept: application/vnd.github.preview' \
-H "Authorization: token ${GITHUB_OAUTH_TOKEN}"`;
  const responseText = exec(cmd);
  const response = JSON.parse(responseText);

  if ('Not Found' === response.message) {
    log.error(`
Invalid project [${project}].
Fix url in config!`);
    process.exit(-1);
  } else if ('Moved Permanently' === response.message) {
    log.error(`
Project:
    [${project}]
moved permanently. Check
    [${response.url}].
to fix the url in config!`);
    process.exit(-1);
  } else if (response.message && response.message.startsWith('API rate limit exceeded')) {
    log.error(`
Cannot get information for:
    [${project}]
Response:
    [${JSON.stringify(response, null, 2)}].
`);
    process.exit(-1);
  }

  saveCache(cmd, responseText);

  return response;
};

const generateSectionItem = (item) => {
  const info = getProjectInfo(item.project);
  const {
    name,
    stargazers_count: stars,
    html_url: link,
  } = info;

  const description = item.description || info.description;

  log.info(`  Adding [${name}]`);

  return {
    description,
    link,
    name,
    stars,
  };
};

const generateSection = ({ title, content }) => {
  log.msg(`Generating section ${title}`);

  const result = content
    .map(generateSectionItem)
    .sort((a, b) => {
      const nameA = a.name.toUpperCase().replace(/-/g, '');
      const nameB = b.name.toUpperCase().replace(/-/g, '');
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    })
    .map((item) => `* [${item.name} ★${item.stars}](${item.link}) - ${item.description}`)

  return [
    `${NEW_LINE}### ${title}${NEW_LINE}`,
    ...result,
  ];
};

const readmeFileTemplate = path.join(__dirname, 'README.md.tpl');
let readmeFileContent = fs.readFileSync(readmeFileTemplate, 'utf8');
const readmeFile = path.join(__dirname, '..', 'README.md');

sections
  .forEach((section) => {
    const generatedContent = generateSection(section).join(NEW_LINE);
    readmeFileContent = readmeFileContent.replace(section.templateName, generatedContent)
  });

fs.writeFileSync(
  readmeFile,
  readmeFileContent,
  'utf8'
);
