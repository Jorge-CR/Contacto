angular.module('contacto1').controller('buscarController', ['$scope', '$sessionStorage', '$location', '$route', '$timeout', 'buscarService', function ($scope ,$sessionStorage, $location, $route, $timeout, buscarService) {

        $scope.contactoBuscar = {};
        $scope.contactoEncontrados = {};

        $scope.contactoBuscar = $sessionStorage.datosbuscar;

        $scope.buscar = function () {

            buscarService.buscarContacto($scope.contactoBuscar).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.contactoEncontrados = response.data.datos;
//                        console.log($scope.contactoEncontrados);
                        break;
                    case 500:
                        $scope.contactoEncontrados = {};
//                        $timeout(function () {
//                            // $route.reload();
//                            window.location.reload();
//                            $location.path('/inicio');
//                        }, 1000);
                       
                }
            });
        };

        $scope.buscar();
        
//eliminar
           $scope.eliminar2 = function (dato) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = dato.con_nombre;
            $scope.apellidos = dato.con_apellidos;
            $scope.ideliminar = dato.con_id;
        };

        $scope.submitEliminarContacto2 = function () {
            buscarService.eliminarCon({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.usuarioEliminado2 = false;
                if (response.data.code == 500) {
                } else {
                    $scope.usuarioEliminado2 = true;
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

    }]);


