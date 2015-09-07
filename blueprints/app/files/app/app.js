import angular from 'angular';
import './templates';

export default function(config) {

  return angular.module(config.name, ['ngRoute', 'templates'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/template.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        });
    })
    .controller('MainCtrl', function() {
      this.message = 'Hello world';
    });

}
