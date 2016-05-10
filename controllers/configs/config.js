Trim.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/news");
  //
  // Now set up the states
  $stateProvider
    .state('news', {
      url: "/news",
      templateUrl: "views/news.HTML",
      controller: 'DialogCtrl'
    })
    .state('trainings', {
      url: "/trainings",
      templateUrl: "views/trainings.HTML",
      controller: 'DialogCtrl'
    })
    .state('reports', {
      url: "/reports",
      templateUrl: "views/reports.HTML",
      controller: 'ReportsCtrl'
    })
    .state('tests', {
      url: "/tests",
      templateUrl: "views/tests.HTML",
      controller: 'TestsCtrl'
    })
    .state('settings', {
      url: "/settings",
      templateUrl: "views/settings.HTML",
      controller: 'SettingsCtrl'
    })
    .state('trainingsinner', {
      url: "/trainings/:id",
      templateUrl: "views/trainingDetails.HTML",
      controller: 'TrainingDetailsCtrl'
    });
});