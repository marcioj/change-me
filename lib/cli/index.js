var path = require('path');
var Blueprint = require('ember-cli/lib/models/blueprint');
var cli = require('ember-cli/lib/cli');

Blueprint.defaultLookupPaths = function() {
  return [
    path.resolve(__dirname, '..', '..', 'blueprints')
  ];
};

module.exports = function(options) {
  options.cli = {
    name: 'ng',
    npmPackage: 'change-me',
    root: path.resolve(__dirname, '..', '..')
  };
  return cli(options);
}
