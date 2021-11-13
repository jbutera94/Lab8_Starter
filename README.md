# Lab 8 - Starter

## Names:
- Jiayi Zhao
- Justin Butera

## Check Your Understanding Questions
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why <br>
(1) Within a Github action that runs whenever code is pushed. Because everyone can get the shared code and be able to check if they all get same test results. 

2. Would you use an end to end test to check if a function is returning the correct output? <br>
No, because unit tests check the output of a function is correct, while end to end tests check the UI functionality.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. <br>
Yes, because we could write a unit test to ensure that the functionality of the code that writes and sends a message correctly does so, and ensure that the recipient user correctly receives the messages.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
No, because we would want to test the UI instead, in order to ensure that the user cannot type in the message box once they exceed 80 characters.
