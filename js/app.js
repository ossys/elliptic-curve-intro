angular.module('presentation', [
]).
config([function() {
  Reveal.initialize();
  functionPlot({
    target: '#elliptic',
    data: [{
      fn: 'sqrt(x^3-1x+1)'
    }]
  });
}]);
