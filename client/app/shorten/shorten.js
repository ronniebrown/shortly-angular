angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.saveLink($scope.link.url)
      .catch(function (err) {
        console.error(err);
      });
  };
});
