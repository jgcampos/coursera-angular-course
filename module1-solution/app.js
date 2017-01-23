(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);



MsgController.$inject = ['$scope'];
function MsgController($scope) {
	$scope.message = "0";

	$scope.sayMessage = function () {
    	return "Yaakov likes to eat healthy snacks at night!";
  	};

  	$scope.feedYaakov = function () {
    	$scope.stateOfBeing = "fed";
  	};


  	$scope.displayMessage = function () {
    	var count  = checkNumber ($scope.menu);
    	var message = "Not valid input "; 

	   
	   	if  ( count >= 1  &&  count <=3 ) 
	   	{
	   		message  = " good enough ... " ;
	   	} 
	   	else if ( count > 3 ) 
	    {
	    	message  = " too much ... " ;
	    }
	    
	    console.log("asignar valores to msg") ; 
	    $scope.message = message;
  	};


	function checkNumber (values) {
  		console.log ("-------------") ; 
	  	if ( values != null ){
	  		return ( values.split(",").length )  ;
	  	} else {
	  		return 0;
	  	}
	}

}

})();




