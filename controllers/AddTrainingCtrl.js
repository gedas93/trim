Trim.controller('AddTrainingCtrl', function($scope, $mdDialog, Training) {
	$scope.trainingTypes = [
		"Conference",
		"Seminar",
		"Training",
		"Presentation"
	];
	$scope.userGroups = [
		"Everyone",
		"Administration",
		"Sales",
		"BASE",
		"LINE"
	];
	$scope.adminAdd = [];
	$scope.closeDialog = function() {
		$mdDialog.hide();
	};
	$scope.adminAdd.submitTraining = function (){
		Training.create($scope.adminAdd.newTraining,
		function (res)
		{
			$mdDialog.hide();
			$mdDialog.show(
				$mdDialog.alert()
					.title('Training '+ $scope.adminAdd.submitTraining.name +' created!')
			        .textContent('To add events go to training through training explorer')
			        .ok('Thanks!')
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
	};
});