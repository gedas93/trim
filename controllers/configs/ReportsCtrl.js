Trim.controller('ReportsCtrl', function ($scope, Registration){
	console.log("ReportsCtrl");
	Registration.find({},function(res){
		$scope.allRegistrations = res;
		console.log("regs found: " , $scope.allRegistrations);
	});
});