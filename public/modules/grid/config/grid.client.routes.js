'use strict';

//Setting up route
angular.module('grid').config(['$stateProvider',
	function($stateProvider) {
		// Grid state routing
		$stateProvider.
		state('grid', {
			url: '/grid',
			templateUrl: 'modules/grid/views/grid.client.view.html'
		});
	}
]);