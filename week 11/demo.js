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
 * aynchronous programming has two concepts - promises and await and async keywords
 */
/**
 * async - promises (cathes the error) works with the "then" keyword
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
 * difference between default statement fromt switch-case statement is the default functions as the only set of action  that will be performed when all other fail in other words only one block of code is run when a condition is fullfilled
 * while the finally() will run along with either then() or catch() function in other words two blocks of code will be executed
 * use of multiple then() functions, we pass the feedback we receive from the promise from the first to the next. done through the (return) keyword
 * aync & await before function and tell the program that its a promise
 * 
 */
//FULFILLED
function fulfilledCode(resolve, reject) {
    let test = 5;
    if (test < 10) {
        /**
         * resolve() function is passed as an argument will
         * be thee feedback ("return value") of promise if its operation
         * is fulfilled(true)
         */
        resolve("value is less than 10");
    }
    else {
        /**
         * reject() function is passed as an argument and the feedback ("return value")
         * of promise if its operations fails (false)
         */
        reject("Value is greater than 10")

    }
}

let newfulfilled = new Promise(fulfilledCode);

newfulfilled.then(
    /**
     * function created without a name and still runs
     * it uses the 'resolve' from the promiseCode callback function
     * when the promise was made
     * the 'value' parameter will receive the feedback from the promise as its arguments
     */

    function (value1) { console.log(value1 + " (first then() function)"); return value1; })

    /**
     * stacking multiple "then" functions to perform a series of actions that will occur aynchronously (at the same time) if promise is fullfulled
     * here, "value2" represents the feedback from the first then() function, ie the argument for the "value1" parameter
     */


    .then(function (value2) { console.log(value2 + " (second then() function)") })
    /*h*
     * below shows that a then() function in a chain must not use the feedback from the previous then() function but can perform a different task asynchronously
     *
     */
    .then(function () { console.log("(third then() function)") })

    //handle the "rejected" feedback from the promise
    .catch(function (error1) { console.log(error1 + " (first catch() function)") })
    //after error is caught, finally is used
    .finally(function () { console.log("And, were done with the promise! (first Final() function)") })

//REJECTED
function rejectedCode(resolve, reject) {
    let test = 15;
    if (test < 10) {
        /**
         * resolve() function is passed as an argument and will be feedback ("return value") of the promise if its operation is fullfilled (true)
         */
        resolve("value is less than 10");
    }
    else {
        /**
         * reject() function is passed as an argument and will be feedback ("return value") of promise if its operation fails (false)
         */
        reject("value is greater than 10");
    }
}
let newRejected = new Promise(rejectedCode);


/**
 * function created without a name that stills run
 * it uses the "resolve" from the rejectedCode callback function when the promise was made
 * the "value" parameter will receive the feedback from the promise as its arguments
 */
newRejected.then(function (value1) { console.log(value1 + " (first then() function)"); return value1; })

    /**
     * stacking multiple "then" functions to perform a series of actions that will occur asynchronously (at the same time) if the promise is fullfilled
     * here "value2" will represent the feedback from the first then() function i.e. the arguments for the "value1" parameter
     */
    .then(function (value2) { console.log(value2 + " (second then() function"); })


    /**
     * a then() function in a chain must not use the feedack from the previous then() function but can perfrom a different task asnchronously
     */
    .then(function () { console.log("(third then() function)"); })

    //handles the 'rejected feedack from the promise'
    .catch(function (error2) { console.log(error2 + " (first catch() function"); })
    .finally(function () { console.log("and, were done with the promise! (first finally() function)"); })

/**
 * asnyc and await keywords work hand-in-hand to turn normal basic functions into asnchronous (with the aid of promises within the function)
 * async keyword turns a function into a promise, running asnychronously
 * similar to adding promise-like features to javascript function i.e. grafting promise functionality unto regular javascript function. enabling it to run witht then() and catch() method. like typical promise
 * await keyword tells function to hold on and wait for promise to be resolved before rest of function finishes its executions
 * example is where we have asynhronous code in which one part relies on the result(output) of another part. await keyword makes all other parts of the code wait for output before it can continue its activity
 * it is only usable within a function that has been made asynchronous via async keyword
 * await and async keyword do not invalidate the use of promises but just an additional way of applying them and cleaning up the the process to prevent unecessary stacking of promises
 * also be aware it is the combination of both of these keywords that turn functions into asynchronous
 */

//await
async function calculate(arga, argb) {
    let multiplier = arga * argb;
    let squareMaker = multiplier * multiplier;


    /**
     * below we create a callback function as the arguments of a new promise object
     * first function represents the "resolved" argument and will perform actions
     * the initial "resolve" argument is passed to the callback function as its arguments
     * the second function represents the "reject" argument passing on the argument from the promise object creation syntax.
     * this will be the feedback of the promise if an error occurs in the processing
     */
    let calculator1 = new Promise(function (resolve) {
        resolve("the square of the multiplication of two arguments which are " + arga + " and " + argb + " is " + squareMaker);
    },
        function (reject) {
            reject("ran into an error");
        });
    //this will print the feedback (return) of the promise object that is stored in the "print" variable that is declared above
    //here we use the "no await" keyword

    console.log(await calculator1);
}
calculate(4, 10);

//if no await is used, a promise object is created