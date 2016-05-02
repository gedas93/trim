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
			$rootScope.isAdmin = true;
		},function(res) {
			console.log("error: res", res);
			$rootScope.isAdmin = false;
		});
		$mdDialog.hide();
	}
});