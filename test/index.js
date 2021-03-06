const { assert } = require('chai');

describe('Config suite', () => {
  const config = require('../index');

  it('config defaults set', () => {
    assert.isFalse(config.debug, 'debug off by default in custom invironment');
    assert.equal(config.environment, 'customenv', 'environment set');
  });

  it('default loaded', () => {
    assert.isTrue(config.defaultLoaded, 'default config set value correctly');
  });

  it('local loaded', () => {
    assert.isTrue(config.localLoaded, 'local config set value correctly');
  });

  it('env loaded', () => {
    assert.isTrue(config.customEnvLoaded, 'env config set value correctly');
  });
});
