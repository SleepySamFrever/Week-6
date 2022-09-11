//Let's talk about unit tests
console.log(`Let's talk about unit tests`);

//As applications become more complex, it becomes difficult to see what impact one change will have on the rest of the code.
//You may tweak something to make a use case work and simultaneously break three other areas of the code.

//To avoid these types of mishaps, Devs use an industry standard practice known as "Unit Testing".
//Unit testing is the process of writing code to test our application code.
//Specifically, we write code to test small pieces of functionality in our application code that we refer to as units.
//This creates a safety net for our code's logic so that is a developer changes something that breaks the code, it will cause the unit test to fail, which notifies the dev that they broke something.
//Without the unit test, the developer may never know that something was broken.

//Many different tools and framework for writing unity tests, but two of the most common frameworks that work together for testing JS are "Mocha" and "Chai".

//In order to use these, we have to use NPM(node package manager) to install them.

function doSomething(x, y) {
    if (typeof x != 'string') {
        thow new Error('x must be a string');
    }
    return x + y;
}