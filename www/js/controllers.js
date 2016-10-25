angular.module('controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $localStorage, base64, moiuniverRestApiFactory, $state) {

        $scope.loginData = {};

        // Create the login modal that we will use later
        /*$ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;

            if ($localStorage.login === undefined) {
                $scope.modal.show();
            }
        });*/

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };


        $scope.logout = function () {
            alert('logout');
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {

            var token = base64.encode($scope.loginData.username + ':' + $scope.loginData.password);
            console.log(token);
            moiuniverRestApiFactory.auth(token).success(function (data) {

                $localStorage.id = data.id;
                $localStorage.group = data.group;
                $localStorage.email = data.email;
                $localStorage.name = data.name;
                $localStorage.authKey = data.authKey;
                $localStorage.timeCreated = data.timeCreated;
                $localStorage.login = true;

                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);

                $state.go('app.profile');
            });
        };
    })

    /*.controller('PlaylistsCtrl', function ($scope, $localStorage) {
        if ($localStorage.login != 'login') {
            $state.go('app.search');
        }

        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })*/

    /*.controller('PlaylistCtrl', function ($scope, $stateParams) {
    })*/

    /*.controller('ProfileCtrl', function ($scope, $localStorage, $state, moiuniverRestApiFactory, $ionicModal) {
        if ($localStorage.login === undefined) {
            $state.go('app.login');
        }

        $scope.profile = [];
        $scope.profile.id = $localStorage.id;
        $scope.profile.group = $localStorage.group;
        $scope.profile.email = $localStorage.email;
        $scope.profile.name = $localStorage.name;
        $scope.profile.authKey = $localStorage.authKey;
        $scope.profile.timeCreated = $localStorage.timeCreated;
        $scope.domain = moiuniverRestApiFactory.getDomain();

        $ionicModal.fromTemplateUrl('templates/addUser.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.addUserModal = function () {
            $scope.modal.show();
        };

        $scope.doClose = function () {
            $scope.modal.hide();
        };

        $scope.users = [];
        moiuniverRestApiFactory.userList().success(function (data) {
            $scope.users = data;
        });

        $scope.addUser = function (user) {
            console.log(user)
            moiuniverRestApiFactory.addUser(user).success(function (data) {
                console.log(data)
                //$scope.users = data;
            }).error(function (data) {
                console.log(data);
                //$scope.data = 'error';
            });
        };
    })
*/
    .controller('CitiesCtrl', function ($scope, $state, $localStorage, moiuniverRestApiFactory) {
        $scope.cities = [];
        //moiuniverRestApiFactory.cityList($localStorage.authKey).success(function (data) {
        moiuniverRestApiFactory.cityList().success(function (data) {
            $scope.cities = data;
        });

        $scope.showVuzs = function (id) {
            console.log(id);
            $state.go('app.vuzs', {id:id})
        };
    })

    .controller('VuzsCtrl', function ($scope, $localStorage, moiuniverRestApiFactory, $stateParams) {
        $scope.vuzs = [];
        console.log($stateParams.id);
        //moiuniverRestApiFactory.vuzList($stateParams.id, $localStorage.authKey).success(function (data) {
        moiuniverRestApiFactory.vuzList($stateParams.id).success(function (data) {
            $scope.vuzs = data;

        });
    })

    .controller('VuzImagesCtrl', function ($scope, $localStorage, moiuniverRestApiFactory, $stateParams) {
        $scope.vuzImages = [];
        console.log($stateParams.id);
        moiuniverRestApiFactory.getImagesVuz($stateParams.id, $localStorage.authKey).success(function (data) {
            $scope.imagesMan = data.man;
            $scope.imagesWomen = data.women;
        });
    })

    .controller('VuzPreviewCtrl', function ($scope, $localStorage, moiuniverRestApiFactory, $stateParams) {
        $scope.previews = [];

        moiuniverRestApiFactory.getPreviewVuz($stateParams.id).success(function (data) {
            $scope.previews = data;
            $scope.domain = moiuniverRestApiFactory.getDomain();
        });
    })

    .controller('SearchCtrl', function ($scope, $localStorage, moiuniverRestApiFactory, $stateParams) {
        $scope.searchVuz = function () {
            $scope.vuzs = [];
            var $string ='А';
            moiuniverRestApiFactory.searchVuz($string).success(function (data) {
                $scope.vuzs = data;
            });
        }
    })

    .controller('ReviewsCtrl', function ($scope, $localStorage, moiuniverRestApiFactory, $stateParams) {
        $scope.reviews = [];

        moiuniverRestApiFactory.reviewList().success(function (data) {
            $scope.reviews = data;
            $scope.domain = moiuniverRestApiFactory.getDomain();
        });
    })
;
