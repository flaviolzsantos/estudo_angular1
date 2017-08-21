angular.module("principal").controller("FotosController",function($scope, recursoFoto, serviceFoto){
    
    $scope.fotos = [];
    $scope.filtros = '';
    $scope.mensagem = '';


    recursoFoto.query(function(dados){
        $scope.fotos = dados;
    },function(error){
        console.log(error);
    });

    //foi modificado pelo código acima
    /*$http.get("v1/fotos").success(function(dados){
        $scope.fotos = dados;
    }).error(function(error){
        console.log(error);
    })*/

    $scope.remover = function(foto){

        recursoFoto.delete({idFoto: foto._id},function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);        
            $scope.mensagem = 'Foto '+ foto.titulo +' removida com sucesso';  
        },function(error){
            console.log('erro na foto '+ foto._id + ' '+ error);
        })

        /*$http.delete('v1/fotos/'+ foto._id).success(function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);        
            $scope.mensagem = 'Foto '+ foto.titulo +' removida com sucesso';    
        }).error(function(error){
            console.log('erro na foto '+ foto._id + ' '+ error);
        });*/
    };

    

    /*Promisse
    var retornoFotos = $http.get("v1/fotos");
    retornoFotos.then(function(dados){
        $scope.fotos = dados.data;
    }).catch(function(error){
        console.log(error);
    });*/
});