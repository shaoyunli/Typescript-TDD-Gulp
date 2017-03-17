namespace primeTables {
    export class ValidationService {
        public validate(n: number): boolean {
            return false;
        }
    };
    angular.module("primeTables")
        .service("valdationService", ValidationService);
}