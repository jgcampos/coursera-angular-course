(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'] ;
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this ;

	toBuy.items =  ShoppingListCheckOffService.getToBuyItems();


    toBuy.toBuyItem = function (itemIndex) {
    	ShoppingListCheckOffService.toBuyItem (itemIndex); 	
    } 
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'] ;
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this; 

	bought.items = 	ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService(){
	var service = this;


	// List for manage data.
	var toBuyItems = ['cookies', 'chocolate cookies'];
	var boughtItems = [];


	service.toBuyItem = function (itemIndex) {
		 var boughtTtem = toBuyItems[itemIndex]; 
		toBuyItems.splice(itemIndex, 1);
		boughtItems.push(boughtTtem); 
	};

	service.getToBuyItems = function () {
		return toBuyItems; 
	};


	service.getBoughtItems = function () {
		return boughtItems; 
	};
} 


})();