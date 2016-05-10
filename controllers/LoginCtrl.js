Trim.controller('LoginCtrl',function($scope, $mdDialog, $rootScope, User){
	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	$scope.loginAction = function () {
		console.log("user submited login credentials");
		console.info($scope.login);
		User.login({
			"email" : $scope.login.username,
			"password" : $scope.login.password
		}, function(res) {
			console.log("res", res);
			$rootScope.adminUser = true;
		},function(res) {
			console.log("error: res", res);
			$rootScope.adminUser = false;
		});
		$mdDialog.hide();
	}
});