describe("The Prime Table Controller", function () {

    var scope, primeTablesController, mockPrimeTableService, mockValdationService, $httpBackend;

    beforeEach(module('primeTables'));

/*
    beforeEach(function(){
        module(function($provide){
            $provide.service('primeTableService', function(){
                this.getPrimeTables = jasmine.createSpy('getPrimeTables');
            });
            $provide.service('valdationService', function(){
                this.validate = jasmine.createSpy('validate');
            })
        })
    })
    */

    beforeEach(inject(function ($injector, $controller, $rootScope, _primeTableService_, _valdationService_) {
        scope = $rootScope.$new();
        mockPrimeTableService = _primeTableService_;
        mockValdationService = _valdationService_;
        $httpBackend = $injector.get("$httpBackend");        
        
        primeTablesController = $controller("primeTablesController", {
            $scope: scope,
            valdationService: mockValdationService,
            primeTableService: mockPrimeTableService
        });
    }));

    it('exists', function() {   
        expect(primeTablesController).not.toBeNull();
    });

    it("should show validation error if the input is 0", function () {

        // Arrange        
        spyOn(mockValdationService, "validate").and.returnValue(false);
                
        // Act
        scope.numberOfPrimes = 0;
        scope.$digest();
        
        // Assert
        expect(scope.hasError).toEqual(true);
    })

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })
})
