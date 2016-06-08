Trim.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/news");
  //
  // Now set up the states
  $stateProvider
    .state('news', {
      url: "/news",
      templateUrl: "views/news.HTML",
      controller: 'DialogCtrl',
      data: {title: "HOME"}
    })
    .state('trainings', {
      url: "/trainings",
      templateUrl: "views/trainings.HTML",
      controller: 'DialogCtrl',
      data: {title: "TRAININGS"}
    })
    .state('editTraining', {
      url: "/edit-training/:id",
      templateUrl: "views/edit-training.HTML",
      controller: 'EditTrainingCtrl',
      data: {title: "EDIT TRAINING"}
    })
    .state('reports', {
      url: "/reports",
      templateUrl: "views/reports.HTML",
      controller: 'ReportsCtrl',
      data: {title: "REPORTS"}
    })
    .state('tests', {
      url: "/tests",
      templateUrl: "views/tests.HTML",
      controller: 'TestsCtrl',
      data: {title: "TESTS"}
    })
    .state('newTest', {
      url: "/newTest",
      templateUrl: "views/add-test.HTML",
      controller: 'CreateTestCtrl',
      data: {title: "NEW TEST"}
    })
    .state('settings', {
      url: "/settings",
      templateUrl: "views/settings.HTML",
      controller: 'SettingsCtrl',
      data: {title: "SETTINGS"}
    })
    .state('trainingsinner', {
      url: "/training/:id",
      templateUrl: "views/trainingDetails.HTML",
      controller: 'TrainingDetailsCtrl',
      data: {title: "TRAINING"},
    })
    .state('testsinner', {
      url: "/test/:id",
      templateUrl: "views/take-test.HTML",
      controller: 'TakeTestCtrl',
      data: {title: "TEST"},
    })
    .state('lectors', {
      url: "/lectors",
      templateUrl: "views/lectors.HTML",
      controller: 'LectorsCtrl',
      data: {title: "LECTORS"},
    });
}).run(function($rootScope, $state){
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.$state = $state;
    // window.loading_screen = window.pleaseWait({
    //           logo: "./assets/img/loadingLogo.png",
    //           backgroundColor: '#43A047',
    //           loadingHtml: "<p class='loading-message' style='font-size: 18pt;color:white'>Calling universe to set up things for you</p><div></div>"
    //         });
  });
});