const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  debug: true,
  skipChrome2: true
});

plugins.push(require('./fed-mods'));

module.exports = {
  ...webpackConfig,
  plugins,
};
