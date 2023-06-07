module.exports = {
    interactive: { default: true },
    instance: {
        type: 'input',
        describe: 'SFMC Instance Name',
        prompt: 'if-no-arg',
    },
    configurationType: {
        type: 'list',
        describe: `Installed Package/Authentication Type`,
        choices: ['Server-to-Server', 'Web App'],
        prompt: 'if-no-arg',
    },
    parentMID: {
        type: 'input',
        describe: 'Parent MID',
        prompt: 'if-no-arg',
    },
    apiClientId: {
        type: 'input',
        describe: 'API Client ID',
        prompt: 'if-no-arg',
    },
    apiClientSecret: {
        type: 'input',
        describe: 'API Client Secret',
        prompt: 'if-no-arg',
    },
    authURI: {
        type: 'input',
        describe: 'Authentication URI',
        prompt: 'if-no-arg',
    },
};
