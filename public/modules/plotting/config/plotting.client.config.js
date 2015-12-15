'use strict';

// Plotting module config
angular.module('plotting').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar',
			'Plotting',
			'plotting',
			'/plotting'
		);
	}
]);
