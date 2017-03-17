describe("The Prime Table Controller", function () {

    var scope, primeTablesController, mockPrimeTableService, mockValdationService, $httpBackend;

    beforeEach(module('primeTables'));

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

    it("should validate input and show error if input is invalid when it is changed.", function () {

        // Arrange        
        spyOn(mockValdationService, "validate").and.returnValue(false);
                
        // Act
        scope.numberOfPrimes = 0;
        scope.$digest();
        
        // Assert
        expect(scope.hasError).toEqual(true);
    })

    it("should validate input and hide error if input is valid when it is changed.", function () {

        // Arrange        
        spyOn(mockValdationService, "validate").and.returnValue(true);
                
        // Act
        scope.numberOfPrimes = 6;
        scope.$digest();
        
        // Assert
        expect(scope.hasError).toEqual(false);
    })

    it("should generate prime table.", function () {

        // Arrange   
        var table = [
            [0, 2, 3, 5],
            [2, 4, 6, 10],
            [3, 6, 9, 15],
            [5, 10, 15, 25]
            ];     
        spyOn(mockPrimeTableService, "getPrimeTable").and.returnValue(table);
                
        // Act
        scope.$digest();
        
        // Assert
        expect(scope.primeTable).toEqual(table);
    })

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })
})
