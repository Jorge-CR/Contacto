angular.module('contacto').service('securityService', ['$http', function($http){
    
    this.validateUserAndPassword = function (data) {
      return $http.post('http://localhost/Contactos/www/server.php/identificar', $.param(data));
    };
    
}]);