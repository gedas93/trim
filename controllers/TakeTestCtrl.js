Trim.controller('TakeTestCtrl', function ($scope, Test, Training, $mdDialog, $stateParams){
	$stateParams.id
	Test.findById({id:$stateParams.id},function(res){
		$scope.currentTest = res;
	});


});