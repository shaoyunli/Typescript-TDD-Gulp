namespace primeTables {

    export class PrimeGeneratorService {

        static $inject = ["validationService"];
        public constructor(
            private validationService: ValidationService
        ){}

        public getPrimes(size: number): Array<number> {
            
            if (this.validationService.validate(size) == false){
                return new Array<number>();
            }

            var primes = [2];
            return primes;

        }
    }

    angular.module("primeTables")
        .service("primeGeneratorService", PrimeGeneratorService);
}