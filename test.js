const { resolve } = require('path');
const { spawn } = require('child_process');

const fixturesPath = resolve(process.cwd(), 'test/fixtures');

const env = {
  ...process.env,
  CONFIG_DIR: fixturesPath,
  NODE_ENV: 'customenv',
  SANDBOX: 'true',
};

spawn('mocha', [], { env, stdio: 'inherit' });
