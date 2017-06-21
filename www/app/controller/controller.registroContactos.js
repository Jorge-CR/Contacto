angular.module('contacto1').controller('registroContactosController', ['$scope', 'mostrarTablaService', '$sessionStorage', '$location', '$route', '$timeout', function ($scope, mostrarTabla, $sessionStorage, $location, $route, $timeout) {

        $scope.contactos = [];
        $scope.contactoBuscar = {};

        $scope.buscar = function () {
            $sessionStorage.datosbuscar = $scope.contactoBuscar;

        };

        /*Funcion mostrar Tabla*/
        $scope.pintarTablaCon = function () {

            mostrarTabla.obtenerCon.then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.contactos = response.data.datos;
                        break;
                    case 500:
                        $scope.contactos = [];
                        $timeout(function () {
                            // $route.reload();
                            window.location.reload();
                            $location.path('/registroContactos');
                        }, 1000);
                }
            });
        };

        $scope.pintarTablaCon();
        /*Fin Funcion mostrar Tabla*/


        /*Funcion Eliminar*/
        $scope.eliminar = function (dato) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = dato.con_nombre;
            $scope.ideliminar = dato.con_id;
        };

        $scope.submitEliminarContacto = function () {
            mostrarTabla.eliminarCon({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.usuarioEliminado = false;
                if (response.data.code == 500) {
                } else {
                    $scope.usuarioEliminado = true;
                    $timeout(function () {
                        $('#eliminarContacto').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        /*Fin Funcion Eliminar*/

        /*Funcion Editar*/
        $scope.editar = function (contacto) {
            $sessionStorage.datos = contacto;
            $location.path('/editar');

        };
         $scope.editar2 = function (contacto) {
            $sessionStorage.datos = contacto;
            $location.path('/editar');

        };
        /*Fin Funcion Editar*/

    }]);



