describe('Application', function () {

    var $httpBackend, $location, $rootScope;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        $location = $injector.get('$location');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })

    it('routes to prime table when path is "/prime-table"', function () {
        $location.path('/prime-table');
        $rootScope.$digest();
    })
})