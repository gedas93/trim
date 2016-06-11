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

  $scope.grid = false;
  //default layout parameters
  $scope.layout = {
        flex:'100',
        height:'100',
        lay:'row',
        flexWidthImg: '15',
        layInv:'column'
      };


  $scope.changeLayout = function() {
    if ($scope.grid) {
      $scope.layout = {
        flex:'100',
        height:'100',
        lay:'row',
        flexWidthImg: '15',
        layInv:'column'
      };
      $scope.grid = !$scope.grid;
    }
    else {
      $scope.layout = {
        flex:'30',
        height:'300',
        lay:'column',
        flexWidthImg: '25',
        layInv:'row'
      };
      $scope.grid = !$scope.grid;
    }
  };
});