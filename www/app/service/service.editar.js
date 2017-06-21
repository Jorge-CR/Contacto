angular.module('contacto').service('editarContactoService', ['$http', function ($http) {

   this.editarCon = function (data) {
            return $http.post('http://localhost/Contactos/www/server.php/editarContacto', $.param(data));
        };
    

    }]);


