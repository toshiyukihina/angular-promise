'use strict';

angular.module('angularPromiseApp')
  .controller('Greet1Ctrl', ['$scope', '$q', function ($scope, $q) {
    function greet(name) {
      var deferred = $q.defer();
      setTimeout(function() {
        $scope.$apply(function() {
          deferred.notify('About to greet ' + name + '.');
          if ($scope.allowedName === name) {
            deferred.resolve('Hello, ' + name + '!');
          } else {
            deferred.reject('Greeting ' + name + ' is not allowed.');
          }
        });
      }, 1000);
      return deferred.promise;
    }

    $scope.allowedName = 'thina';
    $scope.greet = function() {
      var promise = greet($scope.name);
      promise.then(function(greeting) {
        $scope.result = greeting;
      }, function(reason) {
        $scope.result = reason;
      }, function(update) {
        $scope.result = update;
      });
    };
  }]);
