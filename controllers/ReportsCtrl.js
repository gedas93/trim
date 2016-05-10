Trim.controller('ReportsCtrl', function ($scope, $rootScope, Training, Registration, Event){
	Registration.find({},function(res){
		$scope.allRegistrations = res;
	});
	Event.find({},function(res){
		$scope.allEvents = res;
	});
	$scope.filter = [];
	$scope.filter.clearEvent = function(){
		console.info($scope.filter.event);
		$scope.filter.event = "";
		console.info($scope.filter.event);
	};
});