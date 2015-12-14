'use strict';

angular.module('maps').controller('MapsController', ['$scope', 'leafletData',
	function($scope) {
		angular.extend($scope, {
			wisconsin: {
				lat: 44.63,
				lng: -90.02,
				zoom: 6
			},
			defaults: {
				scrollWheelZoom: false
			},
			tiles: {
				Name: 'Stamen Toner Lite',
				url: 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}',
				options: {
					ext: 'png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				}
			},
			geojson: {
				'data': {
					'type': 'FeatureCollection', 
					'features': [{ 
						'type': 'Feature', 
						'geometry': {
							'type': 'Polygon', 
							'coordinates': [
								[
									[-94.00, 48.00], 
									[-94.00, 42.00], 
									[-85.00, 42.00], 
									[-85.00, 48.00], 
									[-94.00, 48.00]
								]
							]
						}
					}]
				},
				'style': {
					'fillColor': '#ff0000',
					'fillOpacity': 0.5,
					'color': '#000000',
					'opacity': 0.2
				}
			}
		});
	}
]);
