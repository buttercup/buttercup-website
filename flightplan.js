const plan = require('flightplan');
const tmpDir = 'buttercup-pw-' + new Date().getTime();

// configuration
plan.target('production', {
    host: 'buttercup.pw',
    username: 'root',
    agent: process.env.SSH_AUTH_SOCK
});

// run commands on localhost
plan.local(function (local) {
    local.log('Copy files to remote hosts');
    var filesToCopy = local.exec('git ls-files', { silent: true });
    // rsync files to all the target's remote hosts
    local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on the target's remote hosts
plan.remote(function (remote) {
    remote.log('Move folder to web root');
    remote.sudo(`cp -R /tmp/${tmpDir} ~/buttercup/`);
    remote.rm(`-rf /tmp/${tmpDir}`);
    remote.sudo(`ln -snf ~/buttercup/${tmpDir} ~/buttercup/current`);

    remote.with('cd ~/buttercup/current', () => {
        remote.log('Install dependencies');
        remote.exec('yarn install');
        remote.exec('yarn build');
        remote.sudo('pm2 startOrRestart ecosystem.json');
    });
});
