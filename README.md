# Prime Tables

The application that takes numeric input (N) from a user and outputs a mulitplication table of (N) prime numbers.

# How to run the application
- Install global dependencies **if necessary**

  ```
    npm install -g gulp-cli typings superstatic karma-cli
  ```

- Install node packages:

  ```
   npm install
  ```

- Launch the server

  ```
   npm start
  ```
  1. Type in a number
  2. If the number is invalid, an error message will show and the button will be disabled.
  3. If the number is valid, a mulitplication table of the given number of prime numbers will show. 

# How to run the tests
 ```
   npm test
  ```
# What I am pleased with
1. The application was written using a test-first TDD approach with high test coverage.
2. The application was written using MVC pattern and Dependency Injection based on AngularJS framework which makes code testable. 
3. The application is reusable and extendable with SOLID design principle. 
4. The application was written using Typescript which can improve the code quality.

# What I would have done with more time
1. Overall, the performance of the algrithem needs to be improved. The current implementation's effiency is not good enough. When running on Chrom, it cannot cope with the number over 800 due to the ineffiency of the current implementation and the limitation of web browser.
2. In terms of the algritherm, I would like to consider the implementation of some advanced approaches, such as Sieve of Eratosthenes algorithm.
3. For the limitation of running service code nn web browser, refactoring the architecture to move the service code to server side, such as writing service in Javascript/Typescript or C# running on nodejs.
4. On the view `primeTable.v.html`, the code inside html `{{item == null ? '' : item}}` can be extracted into a filter which is testable.
5. I also would have written some e2e tests, such as automated web tests if I have more time. 


