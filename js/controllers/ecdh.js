angular.module('presentation')

.controller('ECDHController', ['$scope', function($scope) {

  $scope.private = '';
  $scope.public = '';

  $scope.genSharedSecret = function() {
    var ec = new EC('secp256k1');
    var alicekp = ec.genKeyPair();
    var bobkp = ec.genKeyPair();
    $scope.alice = alicekp.derive(bobkp.getPublic()).toString(16);
    $scope.bob = bobkp.derive(alicekp.getPublic()).toString(16);
  };
}]);
