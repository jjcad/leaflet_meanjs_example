'use strict';

//Setting up route
angular.module('maps').config(['$stateProvider',
	function($stateProvider) {
		// Maps state routing
		$stateProvider.
		state('maps', {
			url: '/maps',
			templateUrl: 'modules/maps/views/maps.client.view.html'
		});
	}
]);