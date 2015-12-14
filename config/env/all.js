'use strict';

module.exports = {
	app: {
		title: 'MEAN',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3001,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/angular-ui-select/dist/select.css',
				'public/lib/angular-ui-grid/ui-grid.css',
				'public/lib/nvd3/build/nv.d3.css',
				'public/lib/leaflet/dist/leaflet.css'				
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-ui-select/dist/select.js',
				'public/lib/angular-ui-grid/ui-grid.js',
				'public/lib/d3/d3.js',
				'public/lib/nvd3/build/nv.d3.js',
				'public/lib/angular-nvd3/dist/angular-nvd3.js',
				'public/lib/leaflet/dist/leaflet.js',
				'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js'				
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
