Trim.controller('ToolbarCtrl',function($scope, $mdDialog, $mdSidenav){
 
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.toggleLoginScreen = function (){
  	$mdDialog.show({
		controller : 'LoginCtrl',
		parent: angular.element(document.body),
		templateUrl : './views/login.HTML'

    })
  }
});