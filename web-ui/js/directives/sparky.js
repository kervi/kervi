(function() {
  var SparkyDirective,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  module.exports = SparkyDirective = (function() {
    function SparkyDirective() {
      this.getBar = bind(this.getBar, this);
      this.getLine = bind(this.getLine, this);
      this.getCircle = bind(this.getCircle, this);
      this.getPolyline = bind(this.getPolyline, this);
      this.getNormaliser = bind(this.getNormaliser, this);
      this.link = bind(this.link, this);
    }

    SparkyDirective.prototype.restrict = 'E';

    SparkyDirective.prototype.templateUrl = 'templates/sparky.html';

    SparkyDirective.prototype.replace = true;

    SparkyDirective.prototype.scope = {
      datasets: '=',
      bar: '=',
      verticalMax: '=',
      pointCount: '=',
      rangeBottom: '=',
      rangeTop: '=',
      w: '=',
      h: '=',
      colorIndex: '@',
      filled: '='
    };

    SparkyDirective.prototype.link = function(scope, element, attrs) {
      var normaliser, pointCount, pointSets, ref, ref1, ref2;
      scope.dimensions = {
        width: (ref = scope.w) != null ? ref : 120,
        height: (ref1 = scope.h) != null ? ref1 : 30
      };
      pointSets = scope.datasets;
      pointCount = (ref2 = scope.pointCount) != null ? ref2 : this.getMaxPointSetLength(pointSets);
      if (scope.bar) {
        normaliser = this.getNormaliser(scope.dimensions.height / 2, pointSets, scope.verticalMax);
        scope.bars = this.getBars(scope.dimensions, pointSets, normaliser, pointCount);
        return scope.barsWidth = Math.floor(scope.dimensions.width / (pointCount + 1));
      } else {
        normaliser = this.getNormaliser(scope.dimensions.height, pointSets, scope.verticalMax);
        scope.lines = this.getLines(scope.dimensions, pointSets, normaliser, pointCount, scope.colorIndex, scope.filled);
        return scope.range = this.getRange(scope.dimensions, normaliser, scope.rangeBottom, scope.rangeTop);
      }
    };

    SparkyDirective.prototype.getMaxPointValue = function(pointSets) {
      var i, j, len, len1, max, point, pointSet;
      max = -Infinity;
      for (i = 0, len = pointSets.length; i < len; i++) {
        pointSet = pointSets[i];
        for (j = 0, len1 = pointSet.length; j < len1; j++) {
          point = pointSet[j];
          if (point > max) {
            max = point;
          }
        }
      }
      return max;
    };

    SparkyDirective.prototype.getMaxPointSetLength = function(pointSets) {
      var i, len, max, pointSet;
      max = 0;
      for (i = 0, len = pointSets.length; i < len; i++) {
        pointSet = pointSets[i];
        if (pointSet.length > max) {
          max = pointSet.length;
        }
      }
      return max;
    };

    SparkyDirective.prototype.getNormaliser = function(height, pointSets, pointSetMax) {
      pointSetMax = pointSetMax != null ? pointSetMax : this.getMaxPointValue(pointSets);
      return (height - 2) / pointSetMax;
    };

    SparkyDirective.prototype.getNormalisedPointSet = function(pointSet, normaliser) {
      return pointSet.map(function(point) {
        return point * normaliser;
      });
    };

    SparkyDirective.prototype.getPointX = function(index, width, pointCount) {
      return index * width / (pointCount - 1);
    };

    SparkyDirective.prototype.getPointY = function(index, height, pointSet) {
      return Math.floor(height - pointSet[index]);
    };

    SparkyDirective.prototype.getPolyline = function(dimensions, pointSet, pointCount, filled) {
      var polyline;
      polyline = pointSet.map((function(_this) {
        return function(point, index) {
          var x, y;
          x = _this.getPointX(index, dimensions.width, pointCount);
          y = _this.getPointY(index, dimensions.height, pointSet);
          return (Math.floor(x)) + "," + y;
        };
      })(this));
      if (filled) {
        polyline.unshift("0," + dimensions.height);
        polyline.push((Math.floor(this.getPointX(pointSet.length - 1, dimensions.width, pointCount))) + "," + dimensions.height);
      }
      return polyline.join(' ');
    };

    SparkyDirective.prototype.getCircle = function(dimensions, pointSet, pointCount) {
      var circle;
      circle = {
        x: Math.floor(this.getPointX(pointSet.length - 1, dimensions.width, pointCount)),
        y: this.getPointY(pointSet.length - 1, dimensions.height, pointSet)
      };
      return circle;
    };

    SparkyDirective.prototype.getLine = function(dimensions, pointSet, normaliser, pointCount, numberOfPointSets, indexOfPointSet, colorIndex, filled) {
      var line, normalisedPointSet;
      line = {};
      normalisedPointSet = this.getNormalisedPointSet(pointSet, normaliser);
      line.polyline = this.getPolyline(dimensions, normalisedPointSet, pointCount, filled);
      line.circle = this.getCircle(dimensions, normalisedPointSet, pointCount);
      line.index = colorIndex != null ? colorIndex : numberOfPointSets - indexOfPointSet;
      return line;
    };

    SparkyDirective.prototype.getLines = function(dimensions, pointSets, normaliser, pointCount, colorIndex, filled) {
      return pointSets.map((function(_this) {
        return function(pointSet, index) {
          return _this.getLine(dimensions, pointSets[index], normaliser, pointCount, pointSets.length, index, colorIndex, filled);
        };
      })(this));
    };

    SparkyDirective.prototype.getRange = function(dimensions, normaliser, bottom, top) {
      var range;
      range = {
        top: Math.floor(dimensions.height - top * normaliser),
        height: Math.floor((top - bottom) * normaliser),
        width: dimensions.width
      };
      return range;
    };

    SparkyDirective.prototype.getBar = function(dimensions, point, pointCount, index) {
      var bar, colorClass, halfway, y;
      halfway = dimensions.height / 2;
      if (point < 0) {
        y = halfway;
        colorClass = 'negative';
      } else {
        y = halfway - point;
        colorClass = 'positive';
      }
      if (point === 0) {
        colorClass = 'warning';
      }
      bar = {
        height: Math.max(0.5, Math.abs(point)),
        x: this.getPointX(index, dimensions.width, pointCount),
        y: y,
        "class": colorClass
      };
      return bar;
    };

    SparkyDirective.prototype.getBars = function(dimensions, pointSets, normaliser, pointCount) {
      var normalisedPointSet;
      normalisedPointSet = this.getNormalisedPointSet(pointSets[0], normaliser);
      return normalisedPointSet.map((function(_this) {
        return function(point, index) {
          return _this.getBar(dimensions, point, pointCount, index);
        };
      })(this));
    };

    return SparkyDirective;

  })();

}).call(this);