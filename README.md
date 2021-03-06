# Prime Tables

The application was developed using Typescript following Test Driven Development (Test first) approach. 

The application that takes numeric input (N) from a user and outputs a multiplication table of (N) prime numbers.

# How to run the application
- Install global dependencies **if necessary**

  ```
    npm install -g gulp-cli typings superstatic karma-cli bower
  ```

- Install node packages:

  ```
   npm install
  ```
  
- Install bower packages:

  ```
   bower install
  ```

- Launch the server

  ```
   npm start
  ```
On the webpage, 
 1. Type in a number
 2. If the number is invalid, an error message will show and the button will be disabled.
 3. If the number is valid, after clicking the button, a multiplication table of the given number of prime numbers will show on the page. 

# How to run the tests
 ```
   npm test
  ```
# What I am pleased with
1. The application was written using a test-first TDD approach with high test coverage.
2. The application was written using MVC pattern and Dependency Injection based on AngularJS framework which makes code easily testable. 
3. The application is reusable and extendable with SOLID design principle. 
4. The application was written using Typescript which can improve the code quality.

# To improve
1. Overall, the performance of the algorithm needs to be improved. The current implementation's performance is not good enough. When running on Chrome, it cannot cope with the number over 800 due to the inefficiency of the current implementation and the limitation of web browser.When running on Safari (Mac), it took 1 minute 5 seconds to generate the table for the size 800. 
2. In terms of the algorithm, I would like to consider the implementation of some advanced approaches, such as Sieve of Eratosthenes algorithm.
3. For the limitation of running service code in web browser, refactoring the architecture to move the service code to server side, such as writing service in JavaScript/Typescript or C# running on nodejs, allows to use more memory on server and improves the capability of application for very large numbers 
4. On the view `primeTable.v.html`, the code inside html `{{item == null ? '' : item}}` can be extracted into an AngularJS filter which is testable.
5. I also would have written some e2e tests, such as automated web tests if I have more time. 


