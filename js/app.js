var app = angular.module('ChromeWorkspaces', []);

app.controller('WorkspaceCtrl', ['$scope', function($scope) {
	$scope.workspaces = [];
	$scope.workspaces.push({name: "first WS"});

}]);
