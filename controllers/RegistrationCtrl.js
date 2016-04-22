Trim.controller('RegistrationCtrl', function($scope, $rootScope ,Training, $mdDialog, Employee, $q) {
	
	Training.find({},function(res){
		$scope.trainings = res;
	});

	var ac = this;
	ac.employees = loadAll();
	$scope.acItems = function (searchText) {
		var result = searchText ? ac.employees.filter(lc(searchText)) : ac.employees;
		return result;
	};

	function loadAll() {
	  return Employee.find({}, function(res) {
	    res.map( function (repo) {
	    repo.name = repo.name + ' ' + repo.lastName;
	    repo.value = repo.name.toLowerCase();
	    return repo;
	  	});
	  });
	}

	function lc (text) {
		var lowercaseQuery = angular.lowercase(text);
          	return function filterFn(item) {
            	return (item.value.indexOf(lowercaseQuery) === 0);
          	};
    }

	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
	$scope.TrainigId = $rootScope.currentTrId;

	$scope.selectedItem = function (sItem) {
		console.log(sItem);
	};

	$scope.submitRegistration = function () {
		$mdDialog.hide();
		$mdDialog.show(
			$mdDialog.alert()
				.title('Registration Complete')
		        .textContent('You have succesfully registered for trainig course. Check your email for further information.')
		        .ok('Got it!')
		);
	};


});