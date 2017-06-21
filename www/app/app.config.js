
/**
 * middleware que comprueba las session y los tipos de roles
 */
angular.module('contacto1').config(['$middlewareProvider', function middlewareProviderConfig($middlewareProvider) {
        $middlewareProvider.map({
            'comprobarSession': ['$sessionStorage', function comprobarSession($sessionStorage) {
                    middlewareComprobarSession(this, $sessionStorage);
                }],
            'comprobarNoTenerSession': ['$sessionStorage', function comprobarNoTenerSession($sessionStorage) {
                    middlewareComprobarNoTenerSession(this, $sessionStorage);
                }]
        });
    }]);



angular.module('contacto1').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html',
                    middleware: ['comprobarNoTenerSession']
                }).
                when('/inicio', {
                    controller: 'registroContactosController',
                    templateUrl: 'app/template/registroContactos.html',
                    middleware: ['comprobarSession']
                }).
                when('/agregar', {
                    controller: 'agregarController',
                    templateUrl: 'app/template/agregar.html',
                    middleware: ['comprobarSession']
                }).
                when('/editar', {
                    controller: 'editarController',
                    templateUrl: 'app/template/editar.html',
                    middleware: ['comprobarSession']
                }).
                when('/buscar', {
                    controller: 'buscarController',
                    templateUrl: 'app/template/buscar.html',
                    middleware: ['comprobarSession']
                }).
                when('/logout', {
                    controller: 'logoutController',
                    template: '<p>Cerrando sesión...</p>',
                    middleware: ['comprobarSession']
                }).
                when('/info', {
                    controller: 'infoController',
                    templateUrl: 'app/template/info.html',
                    middleware: ['comprobarSession']
                }).
                otherwise('/');
    }
]);