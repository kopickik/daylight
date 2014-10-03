/*global define*/
/* app.js
* AngularJS1.pdf - page 52 
*/
define(['angular'], function(angular) {
  'use strict';
  angular.module('myApp', ['myApp.controllers']);

  angular.module('myApp').run(function ($rootScope) {
    $rootScope.title = 'Famous Books';
    $rootScope.name = '$rootScope. ;)';
  });
  angular.module('myApp.controllers', [])
    .controller('SiteCtrl', function ($scope) {
      $scope.publisher = 'SitePoint';
      $scope.type = 'Web Development';
      $scope.name = 'Scope for SiteCtrl';
    })
    .controller('BooksCtrl', function ($scope) {
      $scope.books = ['Jump Start HTML5', 'Genghis Khan and the Raftery\'s', 'Suck !t Hogan!',
      'Harry Ballsonya'];
      $scope.name = 'Scope for BookCtrl';
    });

});
