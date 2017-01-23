(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);



MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.message = "0";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };

  $scope.displayMessage = function () {
    var message = checkNumber ($scope.menu);
    $scope.message = message;
  };

  function checkNumber (values){
  	console.log ("-------------")
  	var message = ""

  	if ( values != null ){
  		if (values.split(",").length > 3 ){
  			message =  "too much "
  		}
  		else {
  			message = " good enough"
  		} 
  	} else {
  		message = " good enough"
  	}

  	return message; 
  }
}



})();




