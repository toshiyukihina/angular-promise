'use strict';

angular.module('angularPromiseApp')
  .controller('Greet2Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {
    function greet(name) {
      $timeout(function() {
        if (name === $scope.AlloedName) {
          $scope.result = 'Hello, ' + name + '!';
        } else {
          $scope.result = 'Greeting ' + name + ' is not allowed.';
        }
      }, 1000);
    }
    $scope.allowedName = 'thina';
    $scope.greet = function() {
      greet($scope.name);
    };
  }]);
