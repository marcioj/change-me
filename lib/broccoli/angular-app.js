var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var funnel = require('broccoli-funnel');

function AngularApp() {
  var args = [];
  for(var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  args.push({
    vendorFiles: {
      'ember.js': null,
      'handlebars.js': null,
      'ember-testing.js': [],
      'app-shims.js': null,
      'ember-resolver.js': null,
      'ember-load-initializers.js': null
    },
    trees: {
      tests: funnel('tests', {
        exclude: ['e2e/**']
      })
    }
  });

  this.appConstructor.apply(this, args);
}

AngularApp.prototype = Object.create(EmberApp.prototype);
AngularApp.prototype.constructor = AngularApp;
AngularApp.prototype.appConstructor = EmberApp.prototype.constructor;

AngularApp.prototype._contentForAppBoot = function(content, config) {
  content.push('if (runningTests) {');
  content.push('  require("' +
               config.modulePrefix +
               '/tests/test-helper");');
  if (this.options.autoRun) {
    content.push('} else {');
    content.push('  require("' +
                 config.modulePrefix +
                 '/app")["default"](' +
                 calculateAppConfig(config) +
                 ');');
  }
  content.push('}');
};

function calculateAppConfig(config) {
  return JSON.stringify(config.APP || {});
}

module.exports = AngularApp;
