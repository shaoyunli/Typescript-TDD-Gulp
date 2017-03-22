namespace primeTables {
    export class PrimeTableService {
        static $inject = ["validationService", "primeGeneratorService"];
        public constructor(
            private validationService: ValidationService,
            private primeGeneratorService: PrimeGeneratorService
        ) { };

        public getPrimeTable(size: number): number[][] {
            if (this.validationService.validate(size) === false) {
                return null;
            }

            let primes = this.primeGeneratorService.getPrimes(size);

            if (primes.length > 0) {

                let row = primes.slice(0);
                row.unshift(null);
                let primeTable: number[][] = [row.slice(0)];
                row[0] = primes[0];
                for (let i = 1; i <= primes.length; i++) {
                    for (let j = 1; j <= primes.length; j++) {
                        row[j] = primes[i - 1] * row[j];
                    }
                    primeTable.push(row);
                    row = primes.slice(0);
                    row.unshift(primes[i]);
                }
                return primeTable;

            } else {
                return null;
            }
        }
    }

    angular.module("primeTables")
        .service("primeTableService", PrimeTableService);
}