angular.module('xCamundaAPP', ['loginService']);

angular.module('xCamundaAPP').controller('loginController', ['$scope', '$window', 'loginRequest', loginController]);
function loginController($scope, $window, loginRequest, mainRequest){
	
	$scope.user = {};
	
	$scope.checkLogin = function(){
		console.log('CheckLogin');
		$window.location.href = 'main.html';
		/*loginRequest.checkLogin($scope.user).success(function(data){
						
			if (data){
				$window.location.href = 'main.html';
			}
		});*/
	};
}