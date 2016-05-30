Trim.controller('CreateTestCtrl', function($scope, $mdDialog, $mdMedia, $rootScope, Training, Test, $state) {
	Training.find({},function (res) {
		$scope.allTrainings = res;
	})
	$scope.createNewTest = function (){
		$scope.newTest = {};
		$scope.newTest.questions = [];
		$scope.CreateNewQuestion();
	};
	$scope.CreateNewQuestion = function () {
		$scope.newQuestion = {};
		$scope.newQuestion.answers = [];
		$scope.newQuestion.answers.push('');
		$scope.newQuestion.answers.push('');
		$scope.newTestParams = {};
		$scope.newTestParams.correct = 0;
		$scope.multiple = false;
	};

	$scope.createNewTest();
	
	$scope.addAnswer = function(){
		$scope.newQuestion.answers.push('');
	};
	$scope.saveQuestion = function(newQ){
		newQ.multiple = $scope.multiple;
		newQ.correct = [];
		if(typeof $scope.newTestParams.correct === 'number' || typeof $scope.newTestParams.correct === 'string'){
			newQ.correct.push($scope.newTestParams.correct);
		}
		else {
			newQ.correct = $scope.newTestParams.correct;
		}
		$scope.newTest.questions.push(newQ);
		$scope.CreateNewQuestion();
	};
	$scope.saveTest = function (object) {
		//console.log(object);

		Test.create(object,
		function (res){
			$mdDialog.show(
				$mdDialog.alert()
					.title('Success!')
			        .textContent('Test ' + res.name + ' has been created successfuly!')
			        .ok('Ok')
			).then(function () {
				 /* body... */ 
				$state.go('testsinner' , {id: res.id});
			});
		},function(err){
			$mdDialog.show(
				$mdDialog.alert()
					.title('Something went wrong')
			        .textContent(err.data.error.message)
			        .ok('ok')
			);
		});
	};
	$scope.toggleCheckBox = function (item, list) {
		// checks and adds/removes values in array $scope.newTestParams.correct
    	var index = list.indexOf(item);
	    if (index > -1) {
	      list.splice(index, 1);
	    }
	    else {
	      list.push(item);
	    }
	    console.log(list);
	};
	$scope.exist = function (item, list) {
		return list.indexOf(item) > -1;
	};
	$scope.isCorrect = function(type, item, list){
		if(type){
			return $scope.exist(item, list);
		}
		else {
			return item == list;
		}
	}
});