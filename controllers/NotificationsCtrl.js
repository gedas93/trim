Trim.controller('NotificationsCtrl',function($scope, $rootScope, $mdSidenav, Registration, Training, $filter, Event){
	$scope.notifications = [
		{"header" : "New registration", "body" : "Gediminas Valaitis registered for Aviacijos Techninins Reglamentavimas" , "action" : "Approve"},
		{"header" : "Upcomming trainings", "body" : "Aviacijos Techninins Reglamentavimas occurs in 2 days" , "action" : "Open Event"},
		{"header" : "Qualification Pending", "body" : "Gediminas Valaitis needs take Aviacijos Techninins Reglamentavimas course ASAP" , "action" : "Remind"},
		{"header" : "New review", "body" : "Gediminas Valaitis left a review for Aviacijos Techninins Reglamentavimas" , "action" : "View"},
		{"header" : "New registration", "body" : "Gediminas Valaitis registered for Aviacijos Techninins Reglamentavimas" , "action" : "Approve"},
		{"header" : "Upcomming trainings", "body" : "Aviacijos Techninins Reglamentavimas occurs in 2 days" , "action" : "Open Event"},
		{"header" : "Qualification Pending", "body" : "Gediminas Valaitis needs take Aviacijos Techninins Reglamentavimas course ASAP" , "action" : "Remind"},
		{"header" : "New review", "body" : "Gediminas Valaitis left a review for Aviacijos Techninins Reglamentavimas" , "action" : "View"}
	];
	var updateList = function() {
		Registration.find({},function(res){
			var filtered = $filter ('filter')(res,{status : null})
			$scope.unapprovedRegistrations = filtered;
		});
	};
	updateList();

	Training.find({},function(res){
		$scope.allTrainings = res;
	});
	Event.find({},function(res){
		$scope.allEvents = res;
	});
	$scope.getTrainingName = function(eventid){
		var ev = $filter('filter')($scope.allEvents,{id : eventid});
		if (ev) var evid = ev[0].trainingId;
		var tr = $filter('filter')($scope.allTrainings,{id : evid});
		var result = 'Training';
		if (!$scope.allTrainings)
			return result;
		if (!$scope.allEvents)
			return result;
		if (tr) return tr[0].name;
		};
	$scope.ApproveRegistration = function(regId){
		// $scope.Reg = Registration.findById({ id : regId});
		// $scope.Reg.status = 'approved';
		// $scope.Reg.$save();
		Registration.prototype$updateAttributes(
		   { id: regId }, 
		   { status: 'approved' });
		updateList();
	};
	
});