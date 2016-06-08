Trim.controller('LectorsCtrl', function ($scope, $mdDialog){
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
	//dummy data
	$scope.Lectors = [
		{name : 'Vardenis',
		surname : 'Pavardenis',
		phone : '123456789',
		email : 'lector@trim.com'}
	];
	//open create lector dialog
	$scope.createLector = function () {
		var alert = {
			title : 'Error',
			ok : 'Ok',
			textContent : 'This function is currently unavailable due development process'
		};
		$mdDialog.show($mdDialog.alert(alert));
	};
	$scope.lectorInfo = function (lectorId) {
		var alert = {
			title : 'Error',
			ok : 'Ok',
			textContent : 'This function is currently unavailable due development process'
		};
		$mdDialog.show($mdDialog.alert(alert));
	};

});