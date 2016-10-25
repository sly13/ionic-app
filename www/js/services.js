angular.module('service', []).
    service('moiuniver', function () {
    var domain = 'http://moiuniver.com/';
    var domainRequest = domain + 'api/';
    this.option = {
        domainUrl : domain,
        profileUrl : domainRequest + 'profile/index',
        cityListUrl : domainRequest + 'city-list/index',
        vuzListUrl : function (id) {
            return domainRequest + 'vuz/index?id=' + id
        },
        reviewListUrl : domainRequest + 'review-list/index',
        userListUrl : domainRequest + 'user/index',
        addUserUrl : domainRequest + 'user/add',
        getPreviewVuzUrl : function (id) {
            return domainRequest + 'vuz/get-preview?id=' + id
        },
        getImagesVuzUrl : function (id) {
            return domainRequest + 'vuz/get-images?id=' + id
        },
        searchVuzUrl : function (string) {
            return domainRequest + 'vuz/search?string=' + string
        }
    }
});