Trim.controller('AdminCtrl', function($scope, $mdDialog, $mdMedia, $rootScope) {
	$scope.adminAdd = [];
	$scope.adminEdit = [];

	$scope.adminAdd.training = function(){
		$mdDialog.show({
    		controller : 'AddTrainingCtrl',
    		parent: angular.element(document.body),
    		templateUrl : './views/add-training.HTML',
    		fullscreen: false
		})
	}

	$scope.adminAdd.event = function(tr){
		console.info("create event clicked " + tr.id);
		$mdDialog.show({
			controller : 'AddEventCtrl',
			parent: angular.element(document.body),
			templateUrl : './views/add-event.HTML',
			fullscreen : false,
			bindToController : true,
			locals : {trainingInfo : tr}
		})
	}

	$scope.adminAdd.test = function(){
		console.info("create test clicked");
	}
	
	$scope.adminEdit.trainingInfo = function (tr) {
		console.info("create event clicked " + tr.id);
		$mdDialog.show({
			controller : 'EditTrainingCtrl',
			parent: angular.element(document.body),
			templateUrl : './views/edit-training.HTML',
			fullscreen : false,
			bindToController : true,
			locals : {trainingInfo : tr}
		})
	}
});
