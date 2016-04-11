// Include the dependency upon ngMaterial - important !!
        var Trim = angular.module('Trim', ['ngMaterial', 'ngResource', 'lbServices']);
        Trim.controller('ContentCtrl', function ($scope, $rootScope){
          //variables
          
          $rootScope.$watch('mainBodyContent', function() {
            console.log("contentctrl: mainContent src changed to : " + $rootScope.mainBodyContent);
            $scope.mainBodyContent = $rootScope.mainBodyContent;
          });
          // $scope.$watch('mainBodyContent',function(){});
          // $scope.test = "test_string";
          $scope.trainings = [
            {
              "id": 0,
              "displayName": "Aircraft familiarization course",
              "lector": "Andrius Gudelis"
            },
            {
              "id": 1,
              "displayName": "Aviacijos techninis reglamentavimas",
              "lector": "Romas Legetavičius"
            },
            {
              "id": 2,
              "displayName": "Customs procedures and regulation",
              "lector": "Tadas Ivanauskas"
            },
            {
              "id": 3,
              "displayName": "Customs procedures and regulation",
              "lector": ""
            },
            {
              "id": 4,
              "displayName": "Darbo teisė ir personalas",
              "lector": ""
            },
            {
              "id": 5,
              "displayName": "Darbuotojų atleidimo proceso valdymas",
              "lector": ""
            },
            {
              "id": 6,
              "displayName": "Efektyvūs pardavimai",
              "lector": ""
            },
            {
              "id": 7,
              "displayName": "English",
              "lector": ""
            },
            {
              "id": 8,
              "displayName": "Excel",
              "lector": "Kristė Straukaitė/Renata Lamauskienė"
            },
            {
              "id": 9,
              "displayName": "Lithuanian",
              "lector": ""
            },
            {
              "id": 10,
              "displayName": "Outlook Tips&Tricks",
              "lector": "Gediminas Valaitis"
            },
            {
              "id": 11,
              "displayName": "Platforms",
              "lector": "Gintarė Jodelė (Locatory)"
            },
            {
              "id": 12,
              "displayName": "PVM",
              "lector": ""
            },
            {
              "id": 13,
              "displayName": "Qlick Sense",
              "lector": "Ramūnas Paškevičius"
            },
            {
              "id": 14,
              "displayName": "Qlick View",
              "lector": "Algirdas Valančius"
            },
            {
              "id": 15,
              "displayName": "Quantum",
              "lector": "Andrejus Volodko"
            },
            {
              "id": 16,
              "displayName": "RAMCO",
              "lector": "Petras Matutis"
            },
            {
              "id": 17,
              "displayName": "Russian",
              "lector": ""
            },
            {
              "id": 18,
              "displayName": "Spare parts",
              "lector": "Andrejus Volodko"
            }
          ];

          $scope.getContentSrc = function(){
            if($scope.mainBodyContent == undefined){$scope.mainBodyContent = "/assets/templates/trainings.tmpl.html";} //index page
            console.log("getContentSrc: content: " + $scope.mainBodyContent)
            return($scope.mainBodyContent);
          }; 
        });
      


// Dialog controller
        Trim.controller('DialogCtrl', function($scope, $mdDialog, $mdMedia, $rootScope) {
            
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

          Trim.controller('RegCtrl', function ($scope, $rootScope, $timeout, $q, $log){
          //variables
          $scope.sel = $rootScope.selectedTrainingsId;
          $scope.test = "test_string";
          $scope.trainings = [
            {
              "id": 0,
              "displayName": "Aircraft familiarization course",
              "lector": "Andrius Gudelis"
            },
            {
              "id": 1,
              "displayName": "Aviacijos techninis reglamentavimas",
              "lector": "Romas Legetavičius"
            },
            {
              "id": 2,
              "displayName": "Customs procedures and regulation",
              "lector": "Tadas Ivanauskas"
            },
            {
              "id": 3,
              "displayName": "Customs procedures and regulation",
              "lector": ""
            },
            {
              "id": 4,
              "displayName": "Darbo teisė ir personalas",
              "lector": ""
            },
            {
              "id": 5,
              "displayName": "Darbuotojų atleidimo proceso valdymas",
              "lector": ""
            },
            {
              "id": 6,
              "displayName": "Efektyvūs pardavimai",
              "lector": ""
            },
            {
              "id": 7,
              "displayName": "English",
              "lector": ""
            },
            {
              "id": 8,
              "displayName": "Excel",
              "lector": "Kristė Straukaitė/Renata Lamauskienė"
            },
            {
              "id": 9,
              "displayName": "Lithuanian",
              "lector": ""
            },
            {
              "id": 10,
              "displayName": "Outlook Tips&Tricks",
              "lector": "Gediminas Valaitis"
            },
            {
              "id": 11,
              "displayName": "Platforms",
              "lector": "Gintarė Jodelė (Locatory)"
            },
            {
              "id": 12,
              "displayName": "PVM",
              "lector": ""
            },
            {
              "id": 13,
              "displayName": "Qlick Sense",
              "lector": "Ramūnas Paškevičius"
            },
            {
              "id": 14,
              "displayName": "Qlick View",
              "lector": "Algirdas Valančius"
            },
            {
              "id": 15,
              "displayName": "Quantum",
              "lector": "Andrejus Volodko"
            },
            {
              "id": 16,
              "displayName": "RAMCO",
              "lector": "Petras Matutis"
            },
            {
              "id": 17,
              "displayName": "Russian",
              "lector": ""
            },
            {
              "id": 18,
              "displayName": "Spare parts",
              "lector": "Andrejus Volodko"
            }
          ];
          
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

          Trim.controller('ToolbarCtrl',function($scope, $mdDialog, $mdSidenav){
              var vm = this;
              this.announceClick = function(index) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .title('You clicked!')
                    .textContent('You clicked the menu item at index ' + index)
                    .ok('Nice')
                );
              };
              $scope.openLeftMenu = function() {
                $mdSidenav('left').toggle();
              };
              $scope.isOpen = false;
              $scope.searchMenu = {
                isOpen: true,
                count: 0,
                selectedDirection: 'left' 
                  };
                }
              );

//Side Navigation Controller

          Trim.controller('ListCtrl', function($scope, $mdMedia, $rootScope, $mdSidenav) {

              
              var resetSIC = function () {
                $scope.selectedItemCurrent = [
                  {refSrc:"/assets/templates/news.tmpl.html", fontweight:""},
                  {refSrc:"/assets/templates/trainings.tmpl.html", fontweight:""},
                  {refSrc:"/assets/templates/tests.tmpl.html", fontweight:""},
                  {refSrc:"/assets/templates/settings.html", fontweight:""},
                  {refSrc:"/assets/templates/trainigs.tmpl.html", fontweight:""}
              ];
              };
              resetSIC();
              $scope.$watch('selectedItemCurrent', function(){
                console.log("Current item object has changed");
              });

              $scope.selectSideItem = function(item) {
                console.log(item + " selected");
                resetSIC ();
                $scope.selectedItemCurrent[item].fontweight = "bold";
                $rootScope.mainBodyContent = $scope.selectedItemCurrent[item].refSrc;
                $mdSidenav('left').toggle();
              }
              $rootScope.$watch('mainBodyContent', function(){
                console.log("mainBodyContent at ListCtrl has changed")
              });

          });

          