# Lab 8 - Starter

Group: Sohil Nadarajan

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

The best option would be within a Github action that runs whenever code is pushed because this enables the test to run on every new development to ensure that updated code hasn't affected the functionality in a negative way. Running tests locally doesn't provide proper insight into whether or not the code functions for other people and running tests after development may result in a bug that is extremely difficult to find given the mountains of code that may have been written after the initial bug.

2. Would you use an end to end test to check if a function is returning the correct output?

No because we would only want to check the functionality of that specific function, so a unit test is more appropriate.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use a unit test for this feature because it requires interactions between components which is something that cannot be tested as a single unit and should be considered an end-to-end test.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test for this because it's only testing a single function of the entire application, and not component interaction functionality.