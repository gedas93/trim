Trim.controller('AdminCtrl', function($scope, $mdDialog, $mdMedia) {
	$scope.adminAdd = [];
	$scope.adminEdit = [];

	$scope.adminAdd.training = function(){
		console.info("create training clicked");
		$mdDialog.show({
    		controller : 'AddTrainingCtrl',
    		parent: angular.element(document.body),
    		templateUrl : './views/add-training.HTML',
    		fullscreen: false
		})
	}

	$scope.adminAdd.event = function(){
		console.info("create event clicked");
	}

	$scope.adminAdd.test = function(){
		console.info("create test clicked");
	}
	
});