'use strict';

//Setting up route
angular.module('plotting').config(['$stateProvider',
	function($stateProvider) {
		// Plotting state routing
		$stateProvider.
		state('plotting', {
			url: '/plotting',
			templateUrl: 'modules/plotting/views/plotting.client.view.html'
		});
	}
]);