'use strict';

// Grid module config
angular.module('grid').run(['Menus',
	function(Menus) {
	Menus.addMenuItem('topbar',
			'Grid',
			'grid',
			'/grid'
		);
	}
]);
