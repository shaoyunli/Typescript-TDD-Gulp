namespace primeTables {
    "use strict";

    interface IScope extends ng.IScope {
        numberOfPrimes: number;
        hasError: boolean;
        generatePrimeTable: Function;
        primeTable: number[][];
        valid: boolean
    }

    class PrimeTablesController {

        static $inject = ["$scope", "primeTableService", "validationService"];
        public constructor(
            $scope: IScope,
            private primeTableService: PrimeTableService,
            private validationService: ValidationService
        ) {

            $scope.hasError = false;
            $scope.$watch(() => { return $scope.numberOfPrimes },
                (n, o) => {
                    $scope.hasError = !this.validationService.validate($scope.numberOfPrimes);
                })
            $scope.generatePrimeTable = () => {
                $scope.primeTable = this.primeTableService.getPrimeTable($scope.numberOfPrimes);
            }
        }
    }

    angular.module("primeTables")
        .controller("primeTablesController", PrimeTablesController);

}