Trim.controller('TakeTestCtrl', function ($scope, Test, Training, $mdDialog, $stateParams, $state, $rootScope){
	$stateParams.id
	Test.findById({id:$stateParams.id},function(res){
		$scope.currentTest = res;
	});
	$scope.finished = false;
	$rootScope.testParams = {};
	$scope.currentAnswers = [];
	$rootScope.auth = false;
	$scope.authForTest = function () {
		var promptSettings = {
			templateUrl: "./views/take-test-prompt.html",
			escapeToClose: false,
			controller: function PropmtCtrl ($scope, $mdDialog, $state, $rootScope) {
				        $scope.cancel = function() {
				          	$mdDialog.hide().then(function(){
								$state.go('tests');
							});
				        }
				        $scope.submitAuth = function (obj) {
							//$scope.identification = identObj;
							$rootScope.testParams = obj;
							$rootScope.auth = true;
							$mdDialog.hide();
							console.log($rootScope.testParams);
						};
			}
		};
		$mdDialog.show(promptSettings);
	};
	$scope.submitAuth = function () {
		//$scope.identification = identObj;
		$scope.auth = true;
		$mdDialog.hide();
		console.log($scope.testParams);
	};
	$scope.cancel = function(){
		$mdDialog.cancel().then(function(){
			$state.go('tests');
		});

	};
	
	$scope.authForTest();
	$scope.isMultiple = function (answers) {
		// console.log('is multiple used')
		if (answers.length <= 1){
			return false;
		}
		else {
			return true;
		};
	};
	$scope.exist = function (item, list) {
		if (list === undefined)
			return false;
		return list.indexOf(item) > -1;
	};
	$scope.selectCorrectAnswer = function (id, answer){
		if (!$scope.currentAnswers[id]){
			$scope.currentAnswers[id] = [];
		}
		var idx = $scope.currentAnswers[id].indexOf(answer);
		if (idx > -1) {
	      $scope.currentAnswers[id].splice(idx, 1);
	    }
	    else {
	      $scope.currentAnswers[id].push(answer);
	    }
	    //console.log($scope.currentAnswers[id]);
	}
	$scope.isCompleted = function (){
		if (!$scope.currentAnswers || !$scope.currentTest){
			return false;
		}
		for (var i = 0; i < $scope.currentAnswers.length; i++) {
			if($scope.currentAnswers[i] == null || $scope.currentAnswers[i] == ''){
				return false;
			}
		}
		if ($scope.currentAnswers.length == $scope.currentTest.questions.length) {
			return true;
		}
	}
	$scope.calculateResults = function () {
		var mainScore = 0;
		var testLen = $scope.currentTest.questions.length
		var totalScore = testLen;
		// for (var j = 0; j < testLen; j++) {
		// 	totalScore += $scope.currentTest.questions[j].correct.length;
		// }
		//console.log(totalScore);
		for (var i = 0; i < testLen; i++) {
			var idx = 0;
			if($scope.currentTest.questions[i].correct.length == 1){
				//console.log('number');
				if ($scope.currentTest.questions[i].correct == $scope.currentAnswers[i]){
					mainScore += 1;
				}
			}
			else {
				//console.log('array');
				if($scope.currentTest.questions[i].correct.sort().join(',') === $scope.currentAnswers[i].sort().join(',')){
				    // mainScore += $scope.currentTest.questions[i].correct.length;
				    mainScore += 1;
				}
			}
		}
		//console.log(mainScore);
		var procent = (mainScore / totalScore) * 100;
		$mdDialog.show(
				$mdDialog.confirm()
					.title('Test Score')
			        .textContent('You have scored ' + Math.round(procent).toFixed(0) + '%')
			        .ariaLabel('Test Finished')
			        .ok('Show Results!')
			        .cancel('Try again')
			).then(function () { 
				$scope.finished = true;
			}, function () {
				$scope.currentAnswers = [];
				$scope.finished = false;
			});
	};

	$scope.isCorrect = function (qId,answer) {
		if($scope.currentTest.questions[qId].correct.indexOf(answer) != -1 && $scope.finished === true){
			return '#A5D6A7';
		}
		else {
			return '';
		}
	}

});