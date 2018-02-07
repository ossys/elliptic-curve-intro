angular.module('presentation')

.controller('ECCController', ['$scope', function($scope) {

  $scope.private = '';
  $scope.public = '';

  $scope.genKeypair = function() {
    var ec = new EC('secp256k1');
    var key = ec.genKeyPair();
    $scope.private = key.getPrivate('hex');
    var pub = key.getPublic().encode('hex');
    $scope.public = pub.substring(2,pub.length);
  };
}]);
