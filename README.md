# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

The best option would be within a Github action that runs whenever code is pushed because this enables the test to run on every new development to ensure that updated code hasn't affected the functionality in a negative way. Running tests locally doesn't provide proper insight into whether or not the code functions for other people and running tests after development may result in a bug that is extremely difficult to find given the mountains of code that may have been written after the initial bug.

2. Would you use an end to end test to check if a function is returning the correct output?

No because we would only want to check the functionality of that specific function, so a unit test is more appropriate.

3. 