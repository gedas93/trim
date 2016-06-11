Trim.controller('TrainingDetailsCtrl', function($scope, $rootScope, Training, Event, $stateParams, $mdDialog, $filter, Registration) {
	
	Training.find({},function(res){
		$scope.trainings = res;
	});

	Registration.find({},function(res){
		$scope.allRegistrations = res;
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
        var prompt = {
            title: 'Subscribe',
            textContent: 'You will get notifiied when new event appears.',
            placeholder: 'E-mail',
            ok: 'Submit',
            cancel: 'Cancel',
            theme: 'dark'
        }
        $mdDialog.show($mdDialog.prompt(prompt)).then(function(result){   
            console.log('Your email is ' + result);
        });
    }


    $scope.plannedEvent = function(variable) {
    	var result = false;
    	if(!$scope.events)
    		return result;
    	for (var i = 0 ; i <= $scope.events.length - 1 ; i++) {
			if($scope.events[i].trainingId == variable){
				result = true;
			}
	    };
		return result;
    };

    Event.find({},function(res){
		$scope.events = res;
		//console.log("Events found :" + $scope.events.length);
		//console.log($scope.events);
	});

    $scope.formatDate = function(input) {
    	if(input == null){return "";}
    	var result = $filter('date')(input,'yyyy-MM-dd HH:mm');
    	return result;
    };

    $scope.getAtendeeCount = function(event_id) {
    	var result = 0;
    	if (!$scope.allRegistrations)
    		return result;
    	var filtered = $filter('filter')($scope.allRegistrations, {eventID : event_id, status : "approved"});
    	if (filtered) 
    		return filtered.length;
    };

});