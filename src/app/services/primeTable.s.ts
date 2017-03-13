module primeTables{

    export class PrimeTableService {

        public getPrimeTables(primes: Array<number>) : number[][]{
            return null;
        }
    }

    angular.module("primeTables")
    .service("primeTableService", PrimeTableService);
}