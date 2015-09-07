'use strict';

exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['tests/e2e/**/*-test.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
