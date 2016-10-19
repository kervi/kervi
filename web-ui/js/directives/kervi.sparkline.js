app.directive("sparklineDirective", function () {

    return {
		restrict: "E",
		scope: {
			data: "@",
			sensorId:"@"
        },

        compile: function (tElement, tAttrs, transclude) {

            //tElement.replaceWith("<span>" + tAttrs.data + "</span>");

            return function (scope, element, attrs) {
				var data=$.parseJSON(attrs.data);
                element.sparkline(data, { type: 'line' });
                
                attrs.$observe("data", function (newValue) {
                    //element.html(newValue);
					var data=$.parseJSON(newValue);
					//element.html(newValue.join(','));
                    element.sparkline(data, { type: 'line' });
                });
            };
        }
    };
});