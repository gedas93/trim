Trim.controller('SubscribeCtrl', function($scope, $rootScope, Training, Event, $stateParams, $mdDialog) {

	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	
	$scope.TrainigId = $rootScope.currentTrId;
	
});