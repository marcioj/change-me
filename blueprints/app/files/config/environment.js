/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: '<%= modulePrefix %>',
    environment: environment,
    baseURL: '/',

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      name: '<%= modulePrefix %>'
    }
  };

  if (environment === 'development') {
  }

  if (environment === 'test') {
  }

  if (environment === 'production') {
  }

  return ENV;
};
