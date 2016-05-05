Trim.controller('AddEventCtrl', function($scope, $mdDialog, Training, trainingInfo, Event) {
	$scope.trainingInfo = trainingInfo;
	console.info($scope.trainingInfo.name);
	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	// $scope.getDateNow = function(){ // console errorus meto. bbz del ko
	// 	result = new Date();
	// 	return result;
	// };
	$scope.adminAdd = [];
	$scope.adminAdd.submitEvent = function(){
		$scope.adminAdd.newEvent.trainingId = trainingInfo.id;
		Event.create($scope.adminAdd.newEvent,
		function (res)
		{
			$mdDialog.hide();
			$mdDialog.show(
				$mdDialog.alert()
					.title('Event created')
			        .ok('ok')
			);
		}, function (err)
		{
			$mdDialog.show(
				$mdDialog.alert()
					.title('Ups... Something went wrong.')
			        .textContent('Please contact helpdesk@fltechnics.com. Error : ', err )
			        .ok('Ok')
			);
		});
		$mdDialog.hide();
		console.log ($scope.adminAdd.newEvent);
	};
});