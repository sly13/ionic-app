angular.module('factory', [])
    .factory('moiuniverRestApiFactory', function ($http, moiuniver) {
        return {
            auth : function (token) {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.profileUrl,
                    headers : {
                        'Content-Type' : "application/x-www-form-urlencoded",
                        'Authorization' : 'Basic ' + token
                    }
                })
            },
            cityList : function () {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.cityListUrl,
                    headers : {
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            vuzList : function (id) {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.vuzListUrl(id),
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8',
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            reviewList : function () {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.reviewListUrl,
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8'
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            userList : function () {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.userListUrl,
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8'
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            addUser : function (user) {
                return $http({
                    method : 'POST',
                    data : user,
                    url : moiuniver.option.addUserUrl,
                    headers : {
                        'Content-Type' : "application/x-www-form-urlencoded"
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            getPreviewVuz : function (id) {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.getPreviewVuzUrl(id),
                    headers : {
                        'Content-Type' : "application/x-www-form-urlencoded"
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            getImagesVuz : function (id) {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.getImagesVuzUrl(id),
                    headers : {
                        'Content-Type' : "application/x-www-form-urlencoded"
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            searchVuz : function (string) {
                return $http({
                    method : 'GET',
                    url : moiuniver.option.searchVuzUrl(string),
                    headers : {
                        'Content-Type' : "application/x-www-form-urlencoded"
                        //'Authorization' : 'Bearer ' + token
                    }
                })
            },
            getDomain : function () {
                return moiuniver.option.domainUrl
            }
        }
    });