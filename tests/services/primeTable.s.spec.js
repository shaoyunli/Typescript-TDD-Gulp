describe('The Prime Table Service', function () {

    var thePrimeTableService, mockValidationService, mockPrimeGeneratorService, createService;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector) {

        mockValidationService = $injector.get('validationService');
        mockPrimeGeneratorService = $injector.get('primeGeneratorService');
        thePrimeTableService = $injector.get('primeTableService');
    }))

    it('should have primeTableService be defined', function () {
        expect(mockValidationService).toBeDefined();
        expect(mockPrimeGeneratorService).toBeDefined();
        expect(thePrimeTableService).toBeDefined();
    })

    it('should return null if the provide size is invalid', function () {

        // Arrange        
        spyOn(mockValidationService, ['validate']).and.returnValue(false);

        // Act
        var primeTable = thePrimeTableService.getPrimeTable(0);

        // Assert
        expect(primeTable).toEqual(null);
    })

    it('should return an array with 2 columns and 2 rows if the provide size is 1', function () {

        // Arrange        
        spyOn(mockValidationService, ['validate']).and.returnValue(true);
        var table = [
            [0, 2],
            [2, 4]
        ];
        spyOn(mockPrimeGeneratorService, ['getPrimes']).and.returnValue([2]);

        // Act
        var primeTable = thePrimeTableService.getPrimeTable(2);

        // Assert
        expect(primeTable).toEqual(table);
    })
})
