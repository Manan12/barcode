var App  = angular.module('myApp', ['qrScanner']);

App.controller('qrCrtl', ['$scope', function($scope) {
    $scope.onSuccess = function(data) {
        console.log(data);
    };
    $scope.onError = function(error) {
        console.log(error);
    };
    $scope.onVideoError = function(error) {
        console.log(error);
    };
}]);