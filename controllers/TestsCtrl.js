Trim.controller('TestsCtrl', function ($scope, $rootScope, Test, Training, $mdDialog){
	//$scope.create.test = [];
	// Training.find({},function(res){
	// 	$scope.allTrainings = res;
	// });
	$scope.loadAllTests = function (){
		Test.find({},function(res){
			$scope.allTests = res;
		});
	};
	$scope.loadAllTests();
	$scope.admin = {};
	$scope.admin.edit = false;
	$scope.grid = true;
	//default layout parameters
	$scope.layout = {
		flex:'30',
		height:'300',
		lay:'column',
		flexWidthImg: '25',
		layInv:'row'
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
	$scope.admin.delete = function (testId) {
		var confirm = $mdDialog.confirm()
			.title('Are you sure ?')
			.textContent('If you delete this Test, changes cannot be undone !')
			.ariaLabel('Confirm delete')
			//.targetEvent(ev)
			.ok('Delete it !')
			.cancel('Cancel');
		$mdDialog.show(confirm).then(function() {
	    	Test.deleteById({id: testId}, function(res){
				console.log('success')
				console.log(res);
				$scope.loadAllTests();
			}, function (err) {
				console.log(err);
			})  	
	    }, function() {});
	};


});