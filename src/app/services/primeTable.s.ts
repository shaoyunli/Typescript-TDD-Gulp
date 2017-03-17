namespace primeTables {
    export class PrimeTableService {

        static $inject = ["validationService", "primeGeneratorService"];
        public constructor(
            private validationService: ValidationService,
            private primeGeneratorService: PrimeGeneratorService
        ) { }

        public getPrimeTable(size: number): number[][] {
            if (this.validationService.validate(size) == false) {
                return null;
            }
        }
    }

    angular.module("primeTables")
        .service("primeTableService", PrimeTableService);
}