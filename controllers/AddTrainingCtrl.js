Trim.controller('AddTrainingCtrl', function($scope, $mdDialog) {
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
	$scope.closeDialog = function() {
		$mdDialog.hide();
	};
});