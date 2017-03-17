namespace primeTables {
    export class PrimeTableService {

    public getPrimeTables(numberOfPrimes: number): number[][] {
            return null;
        }
    }

    angular.module("primeTables")
        .service("primeTableService", PrimeTableService);
}