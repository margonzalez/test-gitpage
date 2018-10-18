const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  scssModulesPath: resolveApp('src/app'),
  scssPath: resolveApp('src/scss')
};
