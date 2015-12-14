'use strict';

// Maps module config
angular.module('maps').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar',
			'Maps',
			'maps',
			'/maps'
		);
	}
]);
