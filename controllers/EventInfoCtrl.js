Trim.controller('EventInfoCtrl', function($scope, $mdDialog, $rootScope, CurrentEvent, Registration, $filter) {
	$scope.currEvent = CurrentEvent;
	$scope.theme = $rootScope.theme;
	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	Registration.find({}, function(res){
		var temp = $filter('filter')(res,{eventID: $scope.currEvent.id});
		$scope.currRegistrations = temp;
	});
});