describe('The Prime Table Service', function(){

    var thePrimeTableService, mockValidationService, mockPrimeGeneratorService, createService;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector) {
        
        mockValidationService = $injector.get('validationService');
        mockPrimeGeneratorService = $injector.get('primeGeneratorService');
        thePrimeTableService = $injector.get('primeTableService');     
    }))

    it('should have primeTableService be defined', function(){
        expect(mockValidationService).toBeDefined();
        expect(mockPrimeGeneratorService).toBeDefined();
        expect(thePrimeTableService).toBeDefined();
    })

    it('should return null if the provide size is invalid', function(){
        
        // Arrange        
        spyOn(mockValidationService, ['validate']).and.returnValue(false);

        // Act
        var primes = thePrimeTableService.getPrimeTable(0);

        // Assert
        expect(primes).toEqual(null);
    })    
})
