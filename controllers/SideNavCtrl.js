Trim.controller('SideNavAndContentViewCtrl', function($scope, $mdMedia, $rootScope, $mdSidenav) {

    $rootScope.resetAllMenuItems = function () {
      $scope.selectedItemCurrent = [
        {refSrc:"/views/news.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/trainings.html", fontweight:"", bcgColor:""},
        {refSrc:"/views/tests.html", fontweight:"", bcgColor:""},
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
      $scope.selectedItemCurrent[item].fontweight = "bold";
      $scope.selectedItemCurrent[item].bcgColor = "#EF5350";
      //$rootScope.mainBodyContent = $scope.selectedItemCurrent[item].refSrc;
      $mdSidenav('left').toggle();
    }
    $scope.selectContentItem = $rootScope.selectContentItem
    $rootScope.$watch('mainBodyContent', function(){
      console.log("mainBodyContent at ListCtrl has changed")
    });

});
