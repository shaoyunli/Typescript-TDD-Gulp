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
            let numSqrt = Math.sqrt(num);
            for (let i = 5; i <= numSqrt; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) {
                    return false;
                }
            }
            return true;
        }

        public getPrimes(size: number): Array<number> {

            if (this.validationService.validate(size) === false) {
                return new Array<number>();
            }

            let primes: Array<number> = new Array<number>();
            let counter = 2;
            while (primes.length < size) {
                if (this.isPrime(counter)) {
                    primes.push(counter);
                }
                counter++;
            }

            return primes;

        }
        // TODO: Consider to use Sieve of Eratosthenes algorithm        
    }

    angular.module("primeTables")
        .service("primeGeneratorService", PrimeGeneratorService);
}