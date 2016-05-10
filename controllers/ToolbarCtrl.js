Trim.controller('ToolbarCtrl',function($scope, $mdDialog, $mdSidenav, $rootScope, Registration, $filter){
 
  $scope.notificationsCount = 0; 
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.toggleLoginScreen = function (){
  	$mdDialog.show({
		controller : 'LoginCtrl',
		parent: angular.element(document.body),
		templateUrl : './views/login.HTML'

    })
  };

  Registration.find({},function(res){
      var filtered = $filter ('filter')(res,{status : null});
      console.log ("filtered: " , filtered.lenght);
      $scope.notificationsCount = filtered.lenght;
  });


});