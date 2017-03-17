namespace primeTables {

    export class PrimeGeneratorService {

        static $inject = ["validationService"];
        public constructor(
            private validationService: ValidationService
        ) { }

        private isPrime(num: number): boolean {
            if (num % 2 === 0 || num % 3 === 0) {
                return (num === 2 || num === 3);
            }
            var numSqrt = Math.sqrt(num);
            for (var i = 5; i <= numSqrt; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) {
                    return false;
                }
            }
            return true;
        }

        public getPrimes(size: number): Array<number> {

            if (this.validationService.validate(size) == false) {
                return new Array<number>();
            }

            var primes: Array<number> = new Array<number>();
            var counter = 2;
            
            while (primes.length < size){
                if (this.isPrime(counter)){
                    primes.push(counter);
                }
                counter++;
            }

            return primes;

        }
    }

    angular.module("primeTables")
        .service("primeGeneratorService", PrimeGeneratorService);
}