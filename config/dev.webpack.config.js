const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const {
  getProxyPaths,
  getHtmlReplacements,
} = require('@redhat-cloud-services/insights-standalone');

const webpackPort = 8002;
const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  debug: true,
  replacePlugin: getHtmlReplacements(),
  port: webpackPort,
  skipChrome2: true
});

plugins.push(require('./fed-mods'));

/*
webpackConfig.optimization = {
  concatenateModules: false,
  splitChunks: {
    cacheGroups: {
      default: false,
    }
  },
  runtimeChunk: false,
};
*/
webpackConfig.devServer.hot = false;
webpackConfig.devServer.proxy = getProxyPaths({ webpackPort });
webpackConfig.devServer.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
};

module.exports = {
  ...webpackConfig,
  plugins,
};
