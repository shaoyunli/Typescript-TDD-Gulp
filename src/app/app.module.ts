((): void => {
    let app = angular.module("primeTables", ["ngRoute"]);

    app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider.when("/prime-table",
            {
                controller: "primeTablesController",
                templateUrl: "app/views/primeTable.v.html",
                controllerAs: "pt"
            }).otherwise({
                redirectTo: "/prime-table"
            });
    }]);
})();
