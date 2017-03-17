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
            [null, 2],
            [2, 4]
        ];
        spyOn(mockPrimeGeneratorService, ['getPrimes']).and.returnValue([2]);

        // Act
        var primeTable = thePrimeTableService.getPrimeTable(2);

        // Assert
        expect(primeTable).toEqual(table);
    })

    it('should return an array with 10 columns and 10 rows if the provide size is 10', function () {

        // Arrange        
        spyOn(mockValidationService, ['validate']).and.returnValue(true);
        var table = [
            [null, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
            [2, 4, 6, 10, 14, 22, 26, 34, 38, 46, 58],
            [3, 6, 9, 15, 21, 33, 39, 51, 57, 69, 87],
            [5, 10, 15, 25, 35, 55, 65, 85, 95, 115, 145],
            [7, 14, 21, 35, 49, 77, 91, 119, 133, 161, 203],
            [11, 22, 33, 55, 77, 121, 143, 187, 209, 253, 319],
            [13, 26, 39, 65, 91, 143, 169, 221, 247, 299, 377],
            [17, 34, 51, 85, 119, 187, 221, 289, 323, 391, 493],
            [19, 38, 57, 95, 133, 209, 247, 323, 361, 437, 551],
            [23, 46, 69, 115, 161, 253, 299, 391, 437, 529, 667],
            [29, 58, 87, 145, 203, 319, 377, 493, 551, 667, 841]
        ];
        spyOn(mockPrimeGeneratorService, ['getPrimes']).and.returnValue([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

        // Act
        var primeTable = thePrimeTableService.getPrimeTable(2);

        // Assert
        expect(primeTable).toEqual(table);
    })
})
