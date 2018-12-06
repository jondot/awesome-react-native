module.exports = {
    publishers: {
        file: true,
        github: {
            auth: {
                type: 'token',
                token: process.env.CELESTE_GH
            },
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
