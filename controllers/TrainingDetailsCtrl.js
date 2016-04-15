Trim.controller('TrainingDetailsCtrl', function($scope, $rootScope ,Training) {
	$scope.tr = $rootScope.selectedTraining;
	$scope.aggreed = true;
	if ($scope.agreeWithTerms == true) {
		$scope.aggreed = false;
	}
	else {
		$scope.aggreed = true;
	};
});