namespace primeTables {
    export class ValidationService {
        public validate(n: number): boolean {
            return (n > 0 && n === parseInt(n.toString(), 10));
        }
    };
    angular.module("primeTables")
        .service("validationService", ValidationService);
}