angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    // var url = {};
    // url.url = $scope.link.url;
    console.log(">>>>>>>>>>", $scope.link);
    Links.saveLink($scope.link.url)
      .catch(function (err) {
        console.error(err);
      });
  };
});