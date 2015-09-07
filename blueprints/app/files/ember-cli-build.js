/* global require, module */
var AngularApp = require('change-me/lib/broccoli/angular-app');
var html2js = require('broccoli-html2js');

module.exports = function(defaults) {
  var app = new AngularApp(defaults, {
    // Add options here
  });

  app.import('bower_components/angular/angular.js');
  app.import('bower_components/angular-route/angular-route.js');
  app.import('vendor/shims.js');

  app.import('bower_components/jasmine-core/lib/jasmine-core/jasmine.css', { type: 'test' });
  app.import('bower_components/jasmine-core/lib/jasmine-core/jasmine.js', { type: 'test' });
  app.import('bower_components/jasmine-core/lib/jasmine-core/jasmine-html.js', { type: 'test' });
  app.import('bower_components/jasmine-core/lib/jasmine-core/boot.js', { type: 'test' });

  app.import('bower_components/angular-mocks/angular-mocks.js', { type: 'test' });

  app.import('vendor/test-loader.js', { type: 'test' });

  app.registry.add('template', {
    name: 'angular-template-cache',
    ext: 'html',
    toTree: function(tree) {
      return html2js(tree, {
        module: 'templates',
        singleModule: true,
        inputFiles: ['**/*.html'],
        outputFile: '/' + app.name + '/templates.js',
        replace: function (filepath) {
          var parts = filepath.split('/');
          parts.shift();
          return parts.join('/');
        }
      });
    }
  });


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
