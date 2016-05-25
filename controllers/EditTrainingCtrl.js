Trim.controller('EditTrainingCtrl', function($scope, $rootScope, $mdDialog, Training, trainingInfo, Event) {
	$scope.trainingInfo = trainingInfo;
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
	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	$scope.adminEdit = {};
	$scope.adminEdit.save = function(){
		Training.prototype$updateAttributes(
		   trainingInfo, function(res){
				$mdDialog.show(
				$mdDialog.alert()
					.title('Hooray!')
			        .textContent('Training info (#' + triningInfo.id + ') has been succefully saved.')
			        .ok('Thanks!')
				);
		   }, function (err){
		   		$mdDialog.show(
				$mdDialog.alert()
					.title('Oops')
			        .textContent('Something went wrong. Please contact system administrator.')
			        .ok('I will')
				);
		   });
	};
	console.info($scope.trainingInfo.name);
});