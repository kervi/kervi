(function () {
	var app = angular.module('KerviWebApp');
	app.directive('kerviControllersDirective', function () {
		var controller = ['$scope', 'KerviService', '$element', '$rootScope', '$timeout', function ($scope, KerviService, $element, $rootScope, $timeout) {
			this.kerviControllers = null;
			this.kerviControllerTypes = null;
			this.current = null;
			this.currentTitle = null;
			this.currentTabId = null;
			this.ct = new Date();
			this.createTime = function () { return this.ct };
			this.tabId = [];
			var self = this;

			console.log("kerviControllersDirective controller ready");

			this.update = function () {
				//$scope.$apply(function() {
				self.kerviControllers = KerviService.getControllers($rootScope.currentLocation);
				console.log("rcs", self.kerviControllers);
				self.kerviControllerTypes = Object.keys(self.kerviControllers);
				console.log("rcsx", self.kerviControllerTypes);
				self.tabId = [];
				for (var i = 0; (i < self.kerviControllerTypes.length); i++) {
					var t = self.kerviControllerTypes[i];
					for (var n = 0; (n < self.kerviControllers[t].length); n++) {
						var tabId = "ctrl-" + t + "-" + self.kerviControllers[t][n].id
						self.tabId.push(tabId);
						if (self.kerviControllers[t][n].id == "manualSteering") {
							self.current = self.kerviControllers[t][n];
							self.currentTitle = t.capitalizeFirstLetter() + "-" + self.kerviControllers[t][n].name;
							self.currentTabId = tabId;
						}
					}
				}
				//});
			}

			if (KerviService.isConnected)
				this.update();

			this.getController = function (tabId) {
				var idInfo = tabId.split('-');
				var ctrlType = idInfo[1];
				var ctrlId = idInfo[2];

				for (var i = 0; (i < self.kerviControllers[ctrlType].length); i++) {
					if (self.kerviControllers[ctrlType][i].id == ctrlId)
						return self.kerviControllers[ctrlType][i];
				}
				return null;
			};

			KerviService.onControllersReady($scope, function () {
				//$scope.$apply(function() {
				self.update()
				//});
			});

			KerviService.onDisconnect($scope, function () {
				$scope.$apply(function () {
					console.log("sensors disconnected");
					self.controllers = null;
					self.controllerTypes = null;
					self.current = null;
					self.currentTitle = null;
					self.currentTabId = null;
				});
			});

			$timeout(function () {
				$("#slide-panel-controllers").on('shown.bs.tab', function (event) {
					console.log("spc c");
					var panelRight = $('#slide-panel-controllers-right');
					$(".tab-pane", '#slide-panel-controllers-right').removeClass("active");

					var ctrlId = event.target.dataset.ctrlid;
					var ctrlType = event.target.dataset.ctrltype;
					//$scope.$apply(function() {
					for (var i = 0; (i < self.kerviControllers[ctrlType].length); i++) {
						if (self.kerviControllers[ctrlType][i].id == ctrlId)
							self.current = self.kerviControllers[ctrlType][i];
					}
					self.currentTitle = ctrlType.capitalizeFirstLetter() + " - " + self.current.name;
					self.currentTabId = "ctrl-" + ctrlType + "-" + self.current.id;
					//});
				});
			});
			$scope.toggleControllers = function ($event) {
				//$('#opener').on('click', function() {		
				console.log("co", this);
				var panelLeft = $('#slide-panel-controllers');
				var panelRight = $('#slide-panel-controllers-right');
				if (panelLeft.hasClass("visible")) {
					panelLeft.removeClass('visible').animate({ 'margin-left': '-350px' });
					panelRight.removeClass('visible').animate({ 'margin-right': '-350px' });
				} else {
					panelLeft.addClass('visible').animate({ 'margin-left': '0px' });
					panelRight.addClass('visible').animate({ 'margin-right': '0px' });
				}
				$event.stopPropagation();
				//});
			};


		}]

		return {
			restrict: 'EA',
			scope: {

			},
			controller: controller,
			controllerAs: "ctrl",
			template: '<div ng-include="contentUrl"></div>',
			link: function ($scope, $element, $attrs, ctrl) {
				$scope.contentUrl = 'templates/controllers' + $attrs.ver + 'Directive.html';
				$scope.boardType = $attrs.boardType;


			}
		};
	});
} ());