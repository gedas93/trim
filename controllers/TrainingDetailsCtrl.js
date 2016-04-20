Trim.controller('TrainingDetailsCtrl', function($scope, $rootScope, Training, Event, $stateParams) {
	

	$scope.trainingId = $stateParams.id; // pagal sita id reiks issitraukt training objecta is DB
	
	Training.find({},function(res){
		$scope.trainings = res;
	});

	Event.find({},function(res){
		$scope.events = res;
		console.log("Events found :" + $scope.events.length);
		console.log($scope.events);
	});

 	$scope.showTrainingDetails = function (training_id) {
	    for (var i = 0 ; i <= $scope.trainings.length - 1 ; i++) {
	      if($scope.trainings[i].id == training_id){
	        $scope.tr = $scope.trainings[i];
	      }
	    };
	};

    $scope.showTrainingDetails($scope.trainingId);

    


});