angular.module('contacto').service('buscarService', ['$http', function($http){
    
//       this.obtenerCon = $http.get('http://localhost/Contactos/www/server.php/obtenerContacto');
    
 this.buscarContacto = function (data) {
      return $http.post('http://localhost/Contactos/www/server.php/buscarContacto', $.param(data));
    };
}]);