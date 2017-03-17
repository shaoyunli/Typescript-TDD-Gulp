describe('The Validation Service', function () {

    var mockValidationService;

    beforeEach(module('primeTables'));

    beforeEach(inject(function ($injector, _validationService_) {
        mockValidationService = _validationService_;
        $httpBackend = $injector.get('$httpBackend');
    }))

    it('should have validationService be defined', function(){
        expect(mockValidationService).toBeDefined();
    })

    it('should return false when validating 0', function () {
        expect(mockValidationService.validate(0)).toEqual(false);
    })

    it('should return false when validating -1', function () {
        expect(mockValidationService.validate(-1)).toEqual(false);
    })

    it('should return false when validating 1.2', function () {
        expect(mockValidationService.validate(1.2)).toEqual(false);
    })

    it('should return true when validating 1', function () {
        expect(mockValidationService.validate(1)).toEqual(true);
    })

    it('should return true when validating 566 ', function () {
        expect(mockValidationService.validate(566)).toEqual(true);
    })

    it('should return true when validating 100000', function () {
        expect(mockValidationService.validate(00000)).toEqual(true);
    })

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })
})

//# sourceMappingURL=validation.s.spec.js.map
