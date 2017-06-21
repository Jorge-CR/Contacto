angular.module('contacto').service('mostrarTablaService', ['$http', function($http){
    
       this.obtenerCon = $http.get('http://localhost/Contactos/www/server.php/obtenerContacto');
    
 this.eliminarCon = function (data) {
      return $http.post('http://localhost/Contactos/www/server.php/eliminarContacto', $.param(data));
    };
}]);