describe('The Prime Generator Service', function(){

    var thePrimeGeneratorService, mockValidationService, createService;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector) {
        
        mockValidationService = $injector.get('validationService');
        thePrimeGeneratorService = $injector.get('primeGeneratorService');     
    }))

    it('should have primeGeneratorService be defined', function(){
        expect(mockValidationService).toBeDefined();
        expect(thePrimeGeneratorService).toBeDefined();
    })

    it('should return empty array if the provide size is invalid', function(){
        
        // Arrange        
        spyOn(mockValidationService, ['validate']).and.returnValue(false);

        // Act
        var primes = thePrimeGeneratorService.getPrimes(0);

        // Assert
        expect(primes).toEqual([]);
    })    

    it('should return [2] when the input is 1', function(){  

        // Arrange        
        spyOn(mockValidationService, ['validate']).and.returnValue(true);

        // Act
        var primes = thePrimeGeneratorService.getPrimes(1);

        // Assert
        expect(primes).toEqual([2]);
    })

})
