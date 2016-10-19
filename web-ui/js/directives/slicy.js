(function() {
  var SliceyDirective,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  module.exports = SliceyDirective = (function() {
    var HALF, QUARTER, RADIUS, ROUND;

    function SliceyDirective() {
      this.getArcs = bind(this.getArcs, this);
      this.link = bind(this.link, this);
    }

    SliceyDirective.prototype.restrict = 'E';

    SliceyDirective.prototype.templateUrl = 'slicey';

    SliceyDirective.prototype.replace = true;

    SliceyDirective.prototype.scope = {
      dataset: '=',
      donut: '=',
      diameter: '@'
    };

    QUARTER = Math.PI / 2;

    HALF = Math.PI;

    ROUND = Math.PI * 2;

    RADIUS = 0.5;

    SliceyDirective.prototype.link = function(scope, element, attrs) {
      return scope.arcs = this.getArcs(scope.dataset);
    };

    SliceyDirective.prototype.getPointX = function(angle) {
      return RADIUS * Math.cos(angle);
    };

    SliceyDirective.prototype.getPointY = function(angle) {
      return RADIUS * Math.sin(angle);
    };

    SliceyDirective.prototype.getArcs = function(dataset) {
      var angle, arcs, datum, endAngle, i, index, j, len, len1, startAngle, total;
      total = 0;
      for (i = 0, len = dataset.length; i < len; i++) {
        datum = dataset[i];
        total += datum.value;
      }
      arcs = new Array(dataset.length);
      startAngle = 0;
      endAngle = -QUARTER;
      for (index = j = 0, len1 = dataset.length; j < len1; index = ++j) {
        datum = dataset[index];
        angle = ROUND * datum.value / total;
        startAngle = endAngle;
        endAngle += angle;
        arcs[index] = {
          x1: this.getPointX(startAngle),
          y1: this.getPointY(startAngle),
          x2: this.getPointX(endAngle),
          y2: this.getPointY(endAngle),
          largeArcFlag: angle > HALF ? 1 : 0,
          color: datum.status
        };
      }
      return arcs;
    };

    return SliceyDirective;

  })();

}).call(this);