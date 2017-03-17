describe('The Validation Service', function () {

    var theValidationService;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector, _validationService_) {
        theValidationService = _validationService_;
        $httpBackend = $injector.get('$httpBackend');
    }))

    it('should have validationService be defined', function(){
        expect(theValidationService).toBeDefined();
    })

    it('should return false when validating 0', function () {        
        var valid = theValidationService.validate(0);
        expect(valid).toEqual(false);
    })

    it('should return false when validating -1', function () {   
        var valid = theValidationService.validate(-1);
        expect(valid).toEqual(false);
    })

    it('should return false when validating 1.2', function () {      
        var valid = theValidationService.validate(1.2);
        expect(valid).toEqual(false);
    })

    it('should return true when validating 1', function () {      
        var valid = theValidationService.validate(1);
        expect(valid).toEqual(true);
    })

    it('should return true when validating 566 ', function () {      
        var valid = theValidationService.validate(566);
        expect(valid).toEqual(true);
    })

    it('should return true when validating 100000', function () {      
        var valid = theValidationService.validate(100000);
        expect(valid).toEqual(true);
    })

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })
})

//# sourceMappingURL=validation.s.spec.js.map
