module.exports = {
    publishers: {
        file: true,
        github: {
            context: {
                ref: process.env.TRAVIS_PULL_REQUEST_SHA,
                repo: 'awesome-react-native',
                owner: 'jondot',
                defaultCommitMessage: 'Celeste: update'
            }
        }
    },
    plugins: {
        dedupLinks: true,
        brokenLinks: true,
        sortByStars: true,
    }
}
