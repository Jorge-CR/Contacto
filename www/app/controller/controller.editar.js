angular.module('contacto1').controller('editarController', ['$scope', 'editarContactoService', '$sessionStorage', '$location', '$route', '$timeout', function ($scope, editarContacto, $sessionStorage, $location, $route, $timeout) {

        $scope.contactoBuscar = {};

        $scope.buscar = function () {
            $sessionStorage.datosbuscar = $scope.contactoBuscar;

        };
        $scope.edit = {};

        //console.log($sessionStorage.infocon);

        $scope.edit.id = $sessionStorage.datos.con_id;
        $scope.edit.foto = $sessionStorage.datos.con_foto;
        $scope.edit.nombre = $sessionStorage.datos.con_nombre;
        $scope.edit.apellidos = $sessionStorage.datos.con_apellidos;
        $scope.edit.telefono = $sessionStorage.datos.con_telefono;
        $scope.edit.correo = $sessionStorage.datos.con_correo;


        $scope.submitEditarContacto = function () {
            editarContacto.editarCon($scope.edit).then(function successCallback(response) {
                $scope.contactoEditado = false;
                $scope.edit = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEditado = true;
                    $scope.edit = '';
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                        $location.path('/registroContactos');
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
    }]);