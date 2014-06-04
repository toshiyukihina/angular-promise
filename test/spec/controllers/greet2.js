'use strict';

describe('Controller: Greet2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPromiseApp'));

  var Greet2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Greet2Ctrl = $controller('Greet2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
