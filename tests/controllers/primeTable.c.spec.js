describe('The Prime Table Controller', function () {

    var scope, primeTablesController, mockPrimeTableService, mockvalidationService, $httpBackend;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector, $controller, $rootScope, _primeTableService_, _validationService_) {
        scope = $rootScope.$new();
        mockPrimeTableService = _primeTableService_;
        mockvalidationService = _validationService_;
        $httpBackend = $injector.get('$httpBackend');        
        
        primeTablesController = $controller('primeTablesController', {
            $scope: scope,
            validationService: mockvalidationService,
            primeTableService: mockPrimeTableService
        });
    }));

    it('exists', function() {   
        expect(primeTablesController).not.toBeNull();
    });

    it('should validate input and show error if input is invalid when it is changed.', function () {

        // Arrange        
        spyOn(mockvalidationService, 'validate').and.returnValue(false);
                
        // Act
        scope.numberOfPrimes = 0;
        scope.$digest();
        
        // Assert
        expect(scope.hasError).toEqual(true);
    })

    it('should validate input and hide error if input is valid when it is changed.', function () {

        // Arrange        
        spyOn(mockvalidationService, 'validate').and.returnValue(true);
                
        // Act
        scope.numberOfPrimes = 6;
        scope.$digest();
        
        // Assert
        expect(scope.hasError).toEqual(false);
    })

    it('should generate prime table.', function () {

        // Arrange   
        var table = [
            [0, 2, 3, 5],
            [2, 4, 6, 10],
            [3, 6, 9, 15],
            [5, 10, 15, 25]
            ];     
        spyOn(mockPrimeTableService, 'getPrimeTable').and.returnValue(table);
        debugger        
        // Act
        scope.generatePrimeTable();
        scope.$digest();
        
        // Assert
        expect(scope.primeTable).toEqual(table);
    })

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })
})
