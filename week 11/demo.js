//javascript asynchronous programming (callback, promises, await and async)
/**
 * to implement callback functions
 * difference between synchronous and asynchronous
 * purpose of asynchronous programming
 * javascript promises and means of implementing
 * understanding javascript await keyword and how it affects promises
 * 
 *
 */

/**
 * callback function is a function passed as an argument to another function similar to how we use variables as arguments in function definitions
 * it speeds up the process of coding by requiring a function to be provided as an argument that is used to perform activities using some output of the calling functions processing
 */
//the parameters(variables that hold the value) first two (argument1 and argument2) are parameters but third one is holding a function reference. callback function has no curl braces
function functionA(argument1, argument2, callback) {
    /**
     * when functionA is called, the callback argument utilizes the first normal argument as its own
     * it performs an action that it wants to do with it (abstraction)
     * application of callback functions - dom event listeners for buttons and asynchronous 
     */

    callback(argument1, argument2);
}

//function to print on console
function print(argument1, argument2) {
    console.log("youre first argument is " + argument1 + " ,and youre second is " + argument2);
}

/**
 * calls functionA, gives it the first two normal arguments, whilst the third argument (callback function)
 * calls print() function (no curl braces used)
 */
functionA(5, 6, print);

//sychronous and asynchronous
/**
 * Javascript, the execution of function is done separately i.e executed one after another
 * function A defined before function B. if function B is called before function A, functionA will be the second to be processed by the system - called synchronous programming....one after the other
 * 
 */