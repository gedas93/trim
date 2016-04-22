Trim.controller('TrainingDetailsCtrl', function($scope, $rootScope, Training, Event, $stateParams, $mdDialog) {
	
	Training.find({},function(res){
		$scope.trainings = res;
	});

	$scope.trainingId = $stateParams.id; // pagal sita id reiks issitraukt training objecta is DB
	

 	$scope.showTrainingDetails = function (training_id) {
	    for (var i = 0 ; i <= $scope.trainings.length - 1 ; i++) {
	      if($scope.trainings[i].id == training_id){
	        $scope.tr = $scope.trainings[i];
	      }
	    };
	};

    $scope.showTrainingDetails($scope.trainingId);
    $scope.showRegistrationDialog = function (training_id) {
    	$mdDialog.show({
    		controller : 'RegistrationCtrl',
    		parent: angular.element(document.body),
    		templateUrl : './views/registration-dialog.HTML'

    	})
    	$rootScope.currentTrId = training_id;
    }

    $scope.subscribe = function (training_id) {
		$mdDialog.show({
			controller : 'SubscribeCtrl',
			parent: angular.element(document.body),
			templateUrl : './views/subscribe-training.HTML'

		})
		$rootScope.currentTrId = training_id;
    }


    $scope.plannedEvent = function(variable) {
    	var result = false;
    	for (var i = 0 ; i <= $scope.events.length - 1 ; i++) {
			if($scope.events[i].trainingId == variable){
				result = true;
			}
	    };
		return result;
    };

    Event.find({},function(res){
		$scope.events = res;
		console.log("Events found :" + $scope.events.length);
		console.log($scope.events);
	});


});