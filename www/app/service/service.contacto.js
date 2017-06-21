   angular.module('contacto').service('registroContactoService', ['$http', function($http){
    
    this.agregarCon = function (data) {
      return $http.post('http://localhost/Contactos/www/server.php/agregarContacto', $.param(data));
    };
    
    this.editarCon = function (data) {
      return $http.post('http://localhost/Contactos/www/server.php/editarContacto', $.param(data));
    };
    
    
    
}]);
