angular.module('principal').controller('FotoController',function($scope, $routeParams, serviceFoto){
    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.idFoto){
        serviceFoto.obterPorId($routeParams.idFoto)
        .then(function(dados){
            $scope.foto = dados;
        })
        .catch(function(erro){
            $scope.mensagem = erro;
        });
    }
   
    $scope.submeter = function(){
        if($scope.formulario.$valid){
            serviceFoto.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if(dados.inclusao) $scope.foto = {};
                //$scope.focado = true;
                $scope.$broadcast('fotoCadastrada');
            })
            .catch(function(dados){
                $scope.mensagem = dados.mensagem;
            });  
        }
    }

    
})