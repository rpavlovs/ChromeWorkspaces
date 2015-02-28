angular.module('ChromeWorkspaces', [])

.factory('wsFactory', function($rootScope) {

	var workspaces = [];
	var currentWSId = -1;

	function doOpenTabsBelongToSavedWS() {

	}


	return {
		getAll: function getAll() {
			return workspaces;
		},
		getCurrent: function getCurrent() {
			if (currentWSId == -1) {
				return {};
			}
			return workspaces[currentWSId];
		},
		add: function add (wsName) {
			var ws = {};

			ws.name = wsName;
			chrome.tabs.query({currentWindow: true}, function(tabs) {
				$rootScope.$apply(function() {
					ws.tabs = tabs;
					workspaces.push(ws);
				});
			});

			console.log(ws);
			console.log(workspaces);
		}
	};

})

.controller('WorkspaceCtrl', ['$scope', 'wsFactory', function($scope, wsFactory) {
	$scope.isSaved = false;
	$scope.workspaces = wsFactory.getAll();
	$scope.ws = wsFactory.getCurrent();

	$scope.save = function() {
		$scope.isSaved = true;
		wsFactory.add($scope.ws.name);
	};

}]);


// chrome.storage.sync.get( 'contexts', function(items) {

// chrome.storage.sync.set( {'contexts': items.contexts} );
