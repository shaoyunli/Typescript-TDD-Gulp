module primeTables {
    "use strict";

    class PrimeTablesController {
        
        static $inject = ["primeTables.primeTableService"];
        constructor(primeService: PrimeTableService) {
           
        }

        private validateInput() : boolean{
            return false;
        }
    }

    angular.module("primeTables")
           .controller("primeTables.primeTablesController", PrimeTablesController);

}