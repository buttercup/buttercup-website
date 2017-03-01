module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/website_deployment',
            deployTo: '/root/buttercup',
            repositoryUrl: 'https://github.com/buttercup-pw/buttercup-website',
            ignores: ['.git', 'node_modules', '.next'],
            rsync: ['--del'],
            keepReleases: 2,
            shallowClone: true
        },
        production: {
            servers: 'root@buttercup.pw'
        }
    });
};
