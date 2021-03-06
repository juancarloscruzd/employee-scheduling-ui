(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name MainApp
     * @requires $routeProvider
     * @description
     *
     * This is the main script, which does the following:
     *
     *   - loads all the submodules
     *   - defines routes via `$routeProvider`
     *   - sets html5Mode to true (removes the # from the route in the URI)
     *
     */
    angular
        .module('app.core')
        .config(function ($locationProvider, $provide, $urlRouterProvider, $stateProvider, RestangularProvider, localStorageServiceProvider) {
            // use "e-scheduling" as a localStorage name prefix so app doesn’t accidently read data from another app using the same variable names
            localStorageServiceProvider.setPrefix('employee-scheduling');

            // overwrite the default behaviour for $uiViewScroll service (scroll to top of the page)
            $provide.decorator('$uiViewScroll', function ($delegate, $window) {
                return function () {
                    $window.scrollTo(0,0);
                };
            });

            /******************************************************************************
             * Authentication provider configuration based on these config constant values
             ******************************************************************************/
            //AuthenticationProvider.configure({
            //    roles: [
            //        'public',
            //        'user',
            //        'admin'
            //    ],
            //    accessLevels: {
            //        'public' : "*",
            //        'anon': ['public'],
            //        'user' : ['user', 'admin'],
            //        'admin': ['admin']
            //    },
            //    loginUrl: '/auth/local/login'
            //});

            // create ACCESS_LEVELS constant that will be use across all application,
            // it needs to be after authentication config so accessLevels are initialize
            //$provide.constant('ACCESS_LEVELS', AuthenticationProvider.accessLevels);

            /*********************************************************************
             * Route provider configuration based on these config constant values
             *********************************************************************/
            // set restful base API Route
            //RestangularProvider.setBaseUrl('/api/' + env.apiVersion);
            RestangularProvider.setBaseUrl('/api/v1');

            // use the HTML5 History API
            $locationProvider.html5Mode(true);

            // for any unmatched url, send to 404 page (Not page found)
            $urlRouterProvider.otherwise('/404');

            // the `when` method says if the url is `/` redirect to `/dashboard` what is basically our `home` for this application
            $urlRouterProvider.when('/', '/schedule');
        })
        .run(function ($rootScope, $location, LocalStorageService, Restangular, $state, $stateParams) {

            // make $state and $stateParams available across all application
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            //http://weblogs.asp.net/dwahlin/cancelling-route-navigation-in-angularjs

            //var currentUser = LocalStorageService.getUser();
                //var role = currentUser ? currentUser.role : undefined;
//            $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
//                if (!Authentication.isAuthorized(toState.data.access, role)) {
//
//                    event.preventDefault();
//                    if (!Authentication.isAuthenticated() && currentUser && toState.url !== '/lock-screen') {
//                        $location.path('/lock-screen');
//                        console.log('No authorized!');
//                    } else if (!Authentication.isAuthenticated() && (toState.url !== '/' && toState.url !== '/lock-screen')) {
//                        $location.path('/');
//                        console.log('No authorized!');
//                    }
//                } else {
//                    if(fromState.url === '^') {
//                        if (!Authentication.isAuthenticated() && currentUser && toState.url !== '/lock-screen') {
//                            $location.path('/lock-screen');
//                        } else if (Authentication.isAuthenticated() && toState.url !== '/home') {
//                            $location.path('/home');
//                        }
//                    }
//                }
//            });
        });
})();
