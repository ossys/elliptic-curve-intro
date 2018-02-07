angular.module('presentation')

.controller('ECDSAController', ['$scope', function($scope) {

  $scope.valid = '';

  $scope.verifySignature = function() {
    var ec = new EC('secp256k1');
    var kp = ec.genKeyPair();
    $scope.msg = "Message Being Signed";
    var signature = kp.sign($scope.msg);
    $scope.derSign = signature.toDER();
    var pubPoint = kp.getPublic();
    var x = pubPoint.getX();
    var y = pubPoint.getY();
    var pub = pubPoint.encode('hex');
    var key = ec.keyFromPublic(pub, 'hex');
    $scope.valid = key.verify($scope.msg, signature);
  };
}]);
