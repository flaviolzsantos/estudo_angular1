angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
    var ddo = {};
    ddo.restict = "AE";
    ddo.scope = {
        titulo: '@',
        url: '@'
    };
    ddo.transclude = true;
    ddo.templateUrl = 'js/directives/meu-painel.html';
        
    return ddo;
})
.directive('meuBotaoPerigo',function(){
    var ddo = {};
    ddo.restict = "E";
    ddo.scope ={
        nome: '@',
        acao: '&'
    };
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)" >{{nome}}</button>'
    return ddo;
})
.directive('meuFocus',function(){
    var ddo = {};
    ddo.restict = "A";
    ddo.scope = {
        focado : '='
    };
    ddo.link = function(scope, element){
        scope.$on('fotoCadastrada',function(){
            element[0].focus();
        });
        /*scope.$watch('focado',function(){
            if(scope.focado){
                element[0].focus();
            }
        })*/
    };
    return ddo;
});