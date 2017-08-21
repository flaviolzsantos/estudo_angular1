angular.module('principal').controller("GruposController",function($scope, $http){

    $scope.grupos = [];
    
    $http.get('v1/grupos')
    .success(function(dados){
        $scope.grupos = dados;
    }).error(function(error){
        console.log(error);
    });
});