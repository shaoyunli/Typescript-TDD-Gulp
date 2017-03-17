namespace primeTables {
    "use strict";

    interface IScope extends ng.IScope{
        numberOfPrimes: number;
        hasError: boolean;
    }

    class PrimeTablesController {

        static $inject = ["$scope", "primeTableService", "valdationService"];
        public constructor(
            $scope: IScope,
            private primeTableService: PrimeTableService,
            private valdationService: ValidationService
        ) {
            
            $scope.hasError = false;
            $scope.$watch(()=> {return $scope.numberOfPrimes},
            (n, o)=>{             
                    $scope.hasError = !this.valdationService.validate($scope.numberOfPrimes)
            })
        }
    }

    angular.module("primeTables")
        .controller("primeTablesController", PrimeTablesController);

}