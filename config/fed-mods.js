const path = require('path')
const webpack = require('webpack');
const jsVarName = require('@redhat-cloud-services/frontend-components-config/src/jsVarName');
const { insights, dependencies } = require('../package.json')
const moduleName = jsVarName(insights.appname);
const singletonDeps = [
  'lodash',
  'redux',
  'react',
  'react-dom',
  'react-router-dom',
  'react-redux',
  'react-promise-middleware',
  '@patternfly/react-core',
  '@patternfly/react-charts',
  '@patternfly/react-table',
  '@patternfly/react-icons',
  '@patternfly/react-tokens',
  '@redhat-cloud-services/frontend-components',
  '@redhat-cloud-services/frontend-components-utilities',
  '@redhat-cloud-services/frontend-components-notifications',
];

module.exports = new webpack.container.ModuleFederationPlugin({
  name: moduleName,
  filename: `${moduleName}.js`,
  // library: { type: 'var', name: moduleName },
  exposes: {
    './RootApp': path.resolve(__dirname, '../src/AppEntry'),
  },
  remotes: {
    odh: 'odh@https://odh-dashboard-test-odh.apps.uxd-os-research.shz4.p1.openshiftapps.com/odhEntry.js'
  },
  shared: singletonDeps.reduce((acc, dep) => {
      const requiredVersion = dependencies[dep];
      if (requiredVersion) {
        acc[dep] = { singleton: true, requiredVersion };
      }
      return acc;
    }, {})
});
