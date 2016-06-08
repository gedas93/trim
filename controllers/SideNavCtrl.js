Trim.controller('SideNavAndContentViewCtrl', function($scope, $mdMedia, $rootScope, $mdSidenav, $rootScope) {

    $rootScope.resetAllMenuItems = function () {
      $scope.selectedItemCurrent = [
        {refSrc:"/views/news.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/trainings.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/tests.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/settings.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/settings.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/settings.html", fontweight:"", bcgColor:""}   
      ];
    };
    $rootScope.resetAllMenuItems();
    $scope.$watch('selectedItemCurrent', function(){
      //console.log("Current item object has changed");
    });

    $rootScope.selectContentItem = function(item) {
      //console.log(item + " selected");
      $rootScope.resetAllMenuItems();
      $scope.selectedItemCurrent[item].fontweight = "";
      $scope.selectedItemCurrent[item].bcgColor = $rootScope.theme.accent;
      $mdSidenav('left').toggle();
    }
    
    $scope.selectContentItem = $rootScope.selectContentItem
    

});
