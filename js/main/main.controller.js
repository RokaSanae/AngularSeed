(function(){
	'use strict';
	angular.module('app.main').controller('MainController',MainController);

	/* @ngInject */
	function MainController($http){
		var vm = this;
		vm.data = {
			'hi':'Hellow'
		};
	}
})();