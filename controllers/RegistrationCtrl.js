Trim.controller('RegistrationCtrl', function($scope, $rootScope ,Training, $mdDialog, Employee, $q, Registration, Event, $filter) {
	
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


	Event.find({},function(res){
		$scope.events = res;
		console.log($scope.events)
	});

	$scope.selectedItem = function (sItem) {
		console.log(sItem);
	};

	$scope.formatDate = function(input) {
    	if(input == null){return "";}
    	var result = $filter('date')(input,'yyyy-MM-dd HH:mm');
    	return result;
    };

	$scope.submitRegistration = function () {
		$scope.registration.regDate = new Date();
		Registration.create($scope.registration,
		function (res)
		{
			$mdDialog.hide();
			$mdDialog.show(
				$mdDialog.alert()
					.title('Registration for '+ $scope.TrainigId +' completed')
			        .textContent('Dear, '+ $scope.registration.name +' ! You have succesfully registered for training course. Check your email for further information.')
			        .ok('Thanks!')
			);
		}, function (err)
		{
			$mdDialog.show(
				$mdDialog.alert()
					.title('Ups... Something went wrong.')
			        .textContent('Please contact helpdesk@fltechnics.com. Error : ', err )
			        .ok('Ok')
			);
		});
	};
});