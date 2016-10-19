  (function() {

  var app = angular.module('KerviWebApp');

  app.directive('controllerButtonDirective',['KerviService','$timeout', function (KerviService,$timeout) {

      var controller = ['$scope','KerviService','$element', function ($scope,KerviService,$element) {
          
      }]

      return {
		restrict: 'E',
        scope: {
			button:'='
			
		},
        controller:controller,
		template:'<a ng-if="button.type==\'button\'" ng-click="clickBtn(button)" class="btn btn-default">{{button.name}}</a>'+
                 '<input bootstrap-switch  ng-if="button.type==\'switch\'" type="checkbox" buttonstate="{{button.state}}" {{button.state && "xchecked" || "" }}>',
        link:function(scope, elem, attrs) {
                if (scope.button.type=="switch"){
                    
                    $timeout(function(){
                        var buttonElm=elem.find("input");
                        buttonElm.bootstrapSwitch({state:scope.button.state});

                        buttonElm.on('switchChange.bootstrapSwitch', function(event, state) {
                            scope.button.state=state;
                            if (state)
                                KerviService.sendCommand(scope.button.onCommand);
                            else
                                KerviService.sendCommand(scope.button.offCommand);
                        });


                        attrs.$observe("state", function (newValue) {
                            if (newValue=="true") {
                                buttonElm.bootstrapSwitch('state', true, true);
                            } else {
                                buttonElm.bootstrapSwitch('state', false, true);
                            }
                        });
                    })
                } 
                else 
                {
                    scope.clickBtn  = function (btn) {
                        console.log("btn clicked", btn);
                        if (btn.type=="button"){
                            KerviService.sendCommand(btn.onClick);
                        }
                        else if (btn.type=="switch"){
                            KerviService.sendCommand(btn.onClick);
                        }
                    };
                }
            }
      };
  }]);

}());