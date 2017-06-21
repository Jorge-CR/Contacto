angular.module('contacto1').controller('agregarController', ['$scope', 'registroContactoService', '$sessionStorage', '$location', '$route', '$timeout', function ($scope, agregarContacto, $sessionStorage, $location, $route, $timeout) {


        $scope.contactoBuscar = {};

        $scope.buscar = function () {
            $sessionStorage.datosbuscar = $scope.contactoBuscar;

        };

        $scope.dataRegistrarContacto = {
            foto: '',
            nombre: '',
            apellidos: '',
            telefono: '',
            correo: ''
        };
        $scope.contactoRegistrado = false;

        $scope.submitNuevoContacto = function () {
            agregarContacto.agregarCon($scope.dataRegistrarContacto).then(function successCallback(response) {
                $scope.contactoRegistrado = false;
                $scope.dataRegistrarContacto = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoRegistrado = true;
                    $scope.dataRegistrarContacto = '';
//                    $timeout(function () {
//                        $('#nuevoContacto').modal('toggle');
//                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                        $location.path('/inicio');
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };

        $scope.submitLimpiar = function () {
            $scope.dataRegistrarContacto = '';
        };

    }]);



