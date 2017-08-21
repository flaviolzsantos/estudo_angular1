angular.module('meusServicos',['ngResource'])
.factory('recursoFoto',function($resource){
    
    return $resource('/v1/fotos/:idFoto',null,{
        'update' : {
            method : 'PUT'
        }
    });
})
.factory('serviceFoto',function(recursoFoto, $q){
    var servico = {};

    servico.cadastrar = function(foto){
        return $q(function(resolve, reject){
            if(foto._id){
                recursoFoto.update({idFoto : foto._id},foto, function(){
                    resolve({
                        mensagem : "Foto " + foto.titulo + " atualizado com sucesso",
                        inclusao : false
                    });
                },function(erro){
                    reject({
                        mensagem : 'Não foi possível alterar a foto ' + foto.titulo
                    });
                });
            }else{
                recursoFoto.save(foto,function(){
                     resolve({
                         mensagem : 'Foto ' + foto.titulo + ' incluído com sucesso',
                         inclusao : true
                     });
                },function(erro){
                    reject({
                        mensagem : 'Não foi possível incluir a foto ' + foto.titulo
                    });
                });
            }
        });
    };

    servico.obterPorId = function(idFoto){
        return $q(function(resolve, reject){
            recursoFoto.get({idFoto : idFoto},function(dado){
                resolve(dado);
            },function(erro){
                reject("Não possível obter a foto");
            });
        });
    };

    return servico;
});