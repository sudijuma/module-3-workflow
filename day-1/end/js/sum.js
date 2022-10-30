// Function to calculate the sum of two inputs
function sum(x, y) {
    return x + y;
}

function helper() {
    console.log("Hello i am helper function");
}

// it will show us that some part of our code is not tested

module.exports = sum;

// last part of the lecture

// we need to write tests

// we are doing unit testing and unite testing is when you test the smallest unit of
// your code

// this why we wrote all the tests in different files because we break our code into small
// units
// testing individual unites, so you know if that test for the single unite failed.
// at this point we know exactly where to go and fix.

// allow us to write very small tests.

// also tests give us confidence
// let's say we have a huge project, this project has 1000ns of lines, and we want to make.
// a huge big change to our project. this change if going to do something different in our flow

// we are touching a lot of different files, doing all changes, and it is hard to manually
// hard to test your application. maybe it is huge website a thousand of pages. testing
// this manually is impossible to do.

// it is very hard to be 100% sure your code doesn't have errors and test everything.
// but writing tests allow us to make our website as much bulletproof as possible.