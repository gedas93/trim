Trim.controller('EditTrainingCtrl', function($scope, $rootScope, $mdDialog, Training, Event,  $stateParams, $state) {
	Training.findById({id:$stateParams.id},function(res){
		$scope.trainingInfo = res;
	})
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
	$scope.adminEdit = {};
	$scope.adminEdit.save = function(){
		Training.prototype$updateAttributes(
		   {id : $stateParams.id},$scope.trainingInfo, function(res){
				$mdDialog.show(
				$mdDialog.alert()
					.title('Hooray!')
			        .textContent('Training info (#' + $scope.trainingInfo.id + ') has been succefully saved.')
			        .ok('Thanks!')
				).then(function(){
					$state.go('trainingsinner',{id:$scope.trainingInfo.id})
				});
		   }, function (err){
		   		$mdDialog.show(
				$mdDialog.alert()
					.title('Oops')
			        .textContent('Something went wrong. Please contact system administrator.')
			        .ok('I will')
				);
		   });
	};
	console.info($stateParams.id);
});