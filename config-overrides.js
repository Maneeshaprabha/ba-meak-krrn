const { override, adjustPaths } = require('customize-cra');

module.exports = override(
  adjustPaths((config) => {
    config.paths.appBuild = './'; 
    return config;
  })
);