var app = angular.module('myApp', [
    'ionic',
    'controllers',
    'ui.router',
    'ngStorage',
    'ab-base64',
    'service',
    'factory'
]);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.browse', {
            url: '/browse',
            views: {
                'menuContent': {
                    templateUrl: 'templates/browse.html'
                }
            }
        })


        /*.state('app.profile', {
            url: '/profile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile.html',
                    controller: 'ProfileCtrl'
                }
            }
        })*/

        .state('app.cities', {
            url: '/cities',
            views: {
                'menuContent': {
                    templateUrl: 'templates/cities.html',
                    controller: 'CitiesCtrl'
                }
            }
        })

        .state('app.vuzs', {
            url: '/vuzs/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vuzs.html',
                    controller: 'VuzsCtrl'
                }
            }
        })

        .state('app.vuzPreview', {
            url: '/vuzPreview/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vuzPreview.html',
                    controller: 'VuzPreviewCtrl'
                }
            }
        })

        .state('app.vuzImages', {
            url: '/vuzImages',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vuzImages.html',
                    controller: 'VuzImagesCtrl'
                }
            }
        })

        .state('app.search', {
            url: '/search',
            views: {
                'menuContent': {
                    templateUrl: 'templates/search.html',
                    controller: 'SearchCtrl'
                }
            }
        })

        .state('app.reviews', {
            url: '/reviews',
            views: {
                'menuContent': {
                    templateUrl: 'templates/reviews.html',
                    controller: 'ReviewsCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/cities');
});
