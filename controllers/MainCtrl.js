// Include the dependency upon ngMaterial - important !!
var Trim = angular.module('Trim', ['ngMaterial', 'ngResource', 'lbServices', 'ui.router', 'angular-notification-icons']);   

// Dialog controller
        Trim.controller('DialogCtrl', function($scope, $mdDialog, $mdMedia, $rootScope,Training) {
            
            $scope.status = '  ';
            $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
            $scope.showAlert = function(ev) {
              // Appending dialog to document.body to cover sidenav in docs app
              // Modal dialogs should fully cover application
              // to prevent interaction outside of dialog
              $mdDialog.show(
                $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#popupContainer')))
                  .clickOutsideToClose(true)
                  .title('This is an alert title')
                  .textContent('You can specify some description text in here.')
                  .ariaLabel('Alert Dialog Demo')
                  .ok('Got it!')
                  .targetEvent(ev)
              );
            };
            $scope.showConfirm = function(ev) {
              // Appending dialog to document.body to cover sidenav in docs app
              var confirm = $mdDialog.confirm()
                    .title('Would you like to delete your debt?')
                    .textContent('All of the banks have agreed to forgive you your debts.')
                    .ariaLabel('Lucky day')
                    .targetEvent(ev)
                    .ok('Please do it!')
                    .cancel('Sounds like a scam');
              $mdDialog.show(confirm).then(function() {
                $scope.status = 'You decided to get rid of your debt.';
              }, function() {
                $scope.status = 'You decided to keep your debt.';
              });
            };
            $scope.showAdvanced = function(ev, selection) {
              $rootScope.selectedTrainingsId = selection;
              var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
              $mdDialog.show({
                controller: DialogController,
                templateUrl: './assets/templates/register.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                fullscreen: useFullScreen
              })
              .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
              }, function() {
                $scope.status = 'You cancelled the dialog.';
              });
              $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
              }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
              });
            };
            $scope.showTabDialog = function(ev) {
              $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tabDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
              })
                  .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                  }, function() {
                    $scope.status = 'You cancelled the dialog.';
                  });
            };
          });

          function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
              $mdDialog.hide();
            };
            $scope.cancel = function() {
              $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
              $mdDialog.hide(answer);
            };
          };

          Trim.controller('RegCtrl', function ($scope, $rootScope, $timeout, $q, $log, Training){
          //variables
          $scope.sel = $rootScope.selectedTrainingsId;
          $scope.test = "test_string";
          Training.find({},function(res){
            $scope.trainings = res;
          });
          
        });


          Trim.controller('NamesCtrl', function ($timeout, $q, $log, Employee) {
            var self = this;
            self.simulateQuery = false;
            self.isDisabled    = false;
            self.repos         = loadAll();
            self.querySearch   = querySearch;
            self.selectedItemChange = selectedItemChange;
            self.searchTextChange   = searchTextChange;
            
            function querySearch (query) {
              var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
                  deferred;
              if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
              } else {
                return results;
              }
            }
            function searchTextChange(text) {
              $log.info('Text changed to ' + text);
            }
            function selectedItemChange(item) {
              $log.info('Item changed to ' + JSON.stringify(item));
            }
            
            function loadAll() {

              return Employee.find({}, function(res) {
                res.map( function (repo) {
                repo.name = repo.name + ' ' + repo.lastName;
                repo.value = repo.name.toLowerCase();
                return repo;
              });
              });

            }
            
            function createFilterFor(query) {
              var lowercaseQuery = angular.lowercase(query);
              return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
              };
            }
          });

//Toolbar Controller


              

//Side Navigation Controller

          Trim.controller('BodyCtrl',function($scope, $rootScope, $mdSidenav, User, $mdToast){
            var isAuth = User.isAuthenticated();
            console.log("isAuth " , isAuth);
            $rootScope.adminUser = isAuth;
            $scope.openRightMenu = function() {
              $mdSidenav('right').toggle();
            };
            $scope.logout = function () {
              User.logout(function(res){
                $rootScope.adminUser = false;
              },function(err){
                $rootScope.adminUser = false;
                console.log(err);
              });
            };
            $rootScope.theme = {
              toolBar: "#ECEFF1",
              sideNav: "#263238",
              content: "#ECEFF1",
              loginHeader: "#4527A0",
              loginBody: "#78909C",
              accent: "#90A4AE"
            };
            $rootScope.loginToast = function () {
              $mdToast.show($mdToast.simple({position: 'bottom right'}).textContent('You have successfuly logged in'));
            };
            
          }
          );