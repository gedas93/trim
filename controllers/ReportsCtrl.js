Trim.controller('ReportsCtrl', function ($scope, $rootScope, Training, Registration, Event, $timeout, RegDetails){
	RegDetails.find({},function(res){
		$scope.allRegistrations = res;
	});
	Event.find({},function(res){
		$scope.allEvents = res;
	});
	Training.find({
		filter: {
			include: [
				{
					relation: 'events'
				}
			]
		}
	},function(res){
		$scope.allTrainings = res;
	});
	$scope.filter = {};
	$scope.filter.clear = function(caseId){
		console.log(caseId);
		switch (caseId) {
			case 1:
				console.log("case1");
				$scope.filter.training = undefined;
				$scope.filter.event = undefined;
				break;
			case 2:
				console.log("case1");
				// $scope.filter.training = undefined;
				$scope.filter.event = undefined;
				break;
			default:
				break;
		}
	};
	$scope.filterAnimation = "animated bounce"
	$scope.filterVisibility = false;
	$scope.showFilter = function(){
		$scope.filterVisibility = !$scope.filterVisibility
	};
});