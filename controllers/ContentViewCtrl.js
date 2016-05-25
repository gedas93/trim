Trim.controller('ContentCtrl', function ($scope, $rootScope, Training){
  $scope.selectContentItem = $rootScope.selectContentItem

  $rootScope.$watch('mainBodyContent', function() {
    console.log("contentctrl: mainContent src changed to : " + $rootScope.mainBodyContent);
    $scope.mainBodyContent = $rootScope.mainBodyContent;
  });

  Training.find({},function(res){
     $scope.trainings = res;
  
  });


  $scope.getContentSrc = function(){
    if($scope.mainBodyContent == undefined){$scope.mainBodyContent = "views/trainings.html";} //index page
    return($scope.mainBodyContent);
  }; 

  $scope.clearSearch = function(){
    console.log($scope.searchText);
    $scope.searchText = '';
  };


});