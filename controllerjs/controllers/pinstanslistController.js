var app = angular.module('xCamundaAPP');
app.controller('pinstanslistController', function ($scope,pinstanslistService){
    //$scope.pinstan = {};  
    $scope.pinstanslist = ""; 
    //$scope.proceso_actual = "";
    
    /*[{
        "date": 1502301398481,
        "instanceid": "720a9b68-77ab-11e7-b2d9-4ee01023a3b9",
        "businesskey": null,
        "processdefinitionid": "invoice:2:b503c3ad-56a3-11e7-9747-4ee01023a3b9"
    }]*/

    

    $scope.getInstansProceso  = function(){        

        pinstanslistService.getInstansProceso($scope.$parent.proceso_actual).success(function(data){
            $scope.pinstanslist = data;
        });
    }


    var vm = this;
    vm.data = 'Nothing here...';
        $scope.$on('msg', function(evt, msg){
            vm.data = msg;
        });

    $scope.$on('msg',function(evt, msg){
        //$scope.proceso_actual = msg;
        $scope.getInstansProceso();
        //console.log("dato padre: " + $scope.$parent.proceso_actual);
    });
    //
    
});