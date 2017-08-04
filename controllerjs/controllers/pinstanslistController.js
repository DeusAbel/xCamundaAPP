var app = angular.module('xCamundaAPP', ['pinstanslistService']);

app.controller('pinstanslistController', ['$scope', 'pinstanslistRequest', pinstanslistController]);

function pinstanslistController ($scope, pinstanslistRequest){

    var updateMode = false;

    $scope.pinstan = {};
    $scope.pinstanslists = {};

    $scope.getAllpinstanslists = function(){
        pinstanslistRequest.getAll().success(function(data){
            $scope.pinstanslists = data;            
        });
    };

    $scope.delete = function(id_pinstan){
        var pinstan = {};
        pinstanslist.id_pinstan = id_pinstan;

        pinstanslistRequest.delete(pinstan).success(function(data){
            $scope.getAllpinstanslists();
        });
        
    }

    $scope.save = function(){
            pinstanslistRequest.insert($scope.pinstan).success(function(data){
                $scope.getAllpinstanslists();
            });     
    }
    $scope.getAllpinstanslists();

}