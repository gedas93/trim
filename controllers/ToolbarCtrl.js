Trim.controller('ToolbarCtrl',function($scope, $mdDialog, $mdSidenav, $rootScope, Registration, $filter){
 
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
  $scope.toggleQuickSettings = function (){
    $mdDialog.show({
    controller : 'QuickSettingsCtrl',
    parent: angular.element(document.body),
    templateUrl : './views/quick-settings.HTML'
    })
  };
  $scope.showSearch = false;
  $scope.switchSearchView = function () {
     $scope.showSearch = !$scope.showSearch; 
  };
  $scope.allShortcuts = [
      {name: "Vienas", type: "Training", link: "aa"},
      {name: "Du", type: "Test", link: "bb"},
    ];

});