angular.module('ChromeWorkspaces', [])

.factory('wsFactory', function() {

	var workspaces = [];

	return {
		get: function get () {
			return workspaces;
		},
		add: function add (name) {
			var ws = {};

			ws.name = name;
			chrome.tabs.query({currentWindow: true}, function(tabs) {
				ws.tabs = tabs;
				workspaces.push(ws);
			});

			console.log(ws);
			console.log(workspaces);
		}
	};

})

.controller('WorkspaceCtrl', ['$scope', 'wsFactory', function($scope, wsFactory) {
	$scope.isSaved = false;
	$scope.workspaces = wsFactory.get();

	$scope.save = function() {
		// $scope.isSaved = true;
		wsFactory.add('a workspace');
	};

}]);


// chrome.storage.sync.get( 'contexts', function(items) {

// chrome.storage.sync.set( {'contexts': items.contexts} );
