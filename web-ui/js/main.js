var app = angular.module('KerviWebApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/connect.html", controller: "ConnectCtrl"})
    .when("/connect", {templateUrl: "partials/connect.html", controller: "ConnectCtrl"})
    .when("/camboard/:location", {templateUrl: "partials/camboard.html?v=1", controller: "PageCtrl"})
	.when("/dashboard/:location", {templateUrl: "partials/dashboard.html?v=2", controller: "PageCtrl"})
    .when("/charts", {templateUrl: "partials/charts.html", controller: "ChartsCtrl"})
	.when("/settings", {templateUrl: "partials/settings.html", controller: "SettingsCtrl"})
	.when("/about", {templateUrl: "partials/about.html", controller: "SettingsCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});


app.directive('showtab',
function () {
	return {
		link: function (scope, element, attrs) {
			element.click(function(e) {
				e.preventDefault();
				var topNav=$(element).closest(".nav-tabs");
				$('li',topNav).removeClass('active');
				$(element).tab('show');
			});
		}
	};
});

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}