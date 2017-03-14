((): void => {

    let app = angular.module("primeTables", ["ngRoute"]);

    app.config(["$routeProvider", ($routeProvider) => {
        $routeProvider.when("/",
            {
                controller: "primeTables.primeTablesController",
                templateUrl: "app/views/primeTable.v.html",
                controllerAs: "pt"
            })
    }]);

})();
