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
 * functionA defined before functionB. if functionB is called before functionA, functionA will be the second to be processed by the system - called synchronous programming....one after the other in a queue (single thread programming language)
 * downloading and still using the website -asynchronous programming that enable multiple functions to run in parallel (run simultaneously- multiple thread, multitasking)
 * aynchronous programming has two concepts - promises and await and aync key words
 */
/**
 * async - promises (cathces the error) works with the "then" keyword
 * a promise is a javascript object(created from the pre-built promise class) that is utilized in asynchronous progrmming
 * its a tester that checks if an asynchronous (parallel) operation has succeeded or failed and runs specified code depending on the success/failure of the operation
 * its similar to an IF/ELSE statement (albeit an advanced one) that checks if an async operation is successful/fails, running different chunks of code upon the result
 * promises derive their name due to their nature of acting. asynchronous programming tells the computer that it should be allowed to do other things while something else is occuring
 * the computer keeps some resources(focus) for the longer-tsking tasks and make it promise to deliver somethin eventually
 * browser keeps resources available for an hour doonwload whilst allowing the user to perform other tasks
 * 
 * promises can be in one of three states
 * pending - still waiting to see if the operation will succeed or fail (default state)
 * fullfilled - states when the operation is successful
 * rejected - states when the operation is a failure
 */

/**
 * promises (then,catch, finally)
 * for fullfilled and rejected state, blocks of code (handlers) to (handle) what should happen in each scenarios
 * regardless for success or failure of these operations, the promises consider (resolved) once its processing is done (failure or success)
 * once resolved, promise calls tow prebuilt functions called then() and catch() functions
 * the former handling what will happen if promise is fullfilled and the later handling what happens if the promise is rejected
 * if promise is fulfilled, one can stack multiple then() function to have numerous actions performed in parallel
 * only one cath() fuction for promise
 * methods called finally() can be added that functions like the (default) condition in switch-case statement i.e it will act regardless if promise is fullfilled or rejected
 * difference between default statement fromt switch-case statement is the default functions as the only set of action  that will be prefromed when all other fail in other words only one block of code is run when a condition is fullfilled
 * while the finally() will run along with either then() or catch() function in other words two blocks of code will be executed
 * use of multiple then() functions, we pass the feedback we receive from the promise from the first to the next
 * 
 * 
 */