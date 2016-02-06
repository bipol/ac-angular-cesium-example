angular.module('app', ['angularCesium']);

angular.module('app').controller('mapCtrl', ['$scope', 'ObservableCollection', 
		function($scope, ObservableCollection) {
			
			var billboardId = 0;

			// here we add billboards
			// in scope to create billboard directives
			$scope.billboards = [{
				image: "/img/smiley.jpg",
				position: {
					latitude: 30.1767, 
					longitude: 85.8056,
					altitude: 500
				},
			}];

			// here we add layers to the scope for web map service layer
			// usage - not that the imagery provider must be false 
			// in order to not load bing by default 
			$scope.layers = [{
				url:"http://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms.cgi?",
				layers: "mrms_p24h"
			}, {
				url:"http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/hawaii_ir.cgi?",
				layers: "hawaii_ir",
			}];


			// or we can use an observable collection to 
			// add billboards - this is dynamically added/
			// removed form the globe
			$scope.observableBillboards = new ObservableCollection();
			$scope.observableBillboards.add( billboardId++, {
				image: "/img/smiley.jpg",
				position: {
					latitude: 35.1767, 
					longitude: 85.8056,
					altitude: 100
				},
			});

}]);
