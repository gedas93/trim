Trim.controller('TestsCtrl', function ($scope, $rootScope, Test, Training, $mdDialog){
	//$scope.create.test = [];
	Training.find({},function(res){
		$scope.allTrainings = res;
	});
	Test.find({},function(res){
		$scope.allTests = res;
	});


});