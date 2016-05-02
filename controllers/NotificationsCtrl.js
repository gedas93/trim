Trim.controller('NotificationsCtrl',function($scope, $rootScope, $mdSidenav){
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
});