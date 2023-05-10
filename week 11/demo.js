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

//normal function
function addNumber(a, b) {
    return ("the sum is " + (a + b));
}
//callback function
function method(x, y, callback) {
    return callback(x, y);
}
console.log(method(14, 15, addNumber));


//inbuilt javascript function that has a timer
setTimeout(functionB, 2000);
function functionB() {
    console.log("this is a new day")
}

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
let promise1 = new Promise((resolve, reject) => {
    let x = 8;
    if (x < 4) {
        resolve(true)
    } else {
        reject(false)
    }
})

promise1.then((value) => { console.log(value) })
    .catch((error) => { console.log(error) })


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

const newFunction = async () => {
    const functionD = (x, y) => {
        return x % y;
    }
    return "Hello World"

}

newFunction().then((value) => { console.log(value) })
    .catch((error) => { console.log(error) })
    .finally(() => { console.log("exit") })
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

/**HTML DOM - document object model
 * (HTML) DOM elements, methods, CSS, events
 * DOM is a representation of webpage that uses object to represent strucutre of a webpage with parent and child relationship
 * each object(element) in the DOM will have properties(attributes) and methods that can be accessed to dynamically interact with webpage such as how attributes of an element are represented as as the properties in the corresponding objects
 * NOTE each object including whitespaces and comments in the DOM is called a node
 * a node is a representation of a point in a network that is interconnected to other points in a network/ a node is a point in a network or diagram at which a line or pathway intersects or branch
 * manipulation of the DOM using the property "innerHTML". a property given to most objects (elements) in the typical DOM webpage. represents the actual content of the object and is manipulated using a function called - document,getelementbyID([element_ID]),innerHTML
 * javascript DOM refers to how we can use javascript to access and edit the HTML DOM dynamically
 * when referring to "document" we are working with DOM, HTML page as seen in the DOM. its the sum total of all objects(node) of HTML webpage
 * 
 * javascript DOM - elements and methods
 * How to target HTML Elements (DOM objects) using specific methods
 * such method include - getElementById([Element_ID])
 * setAttribute() - used to dynamically set attributes of an element. each element has attributes that can be edited like properties in traditional javascript OOP
 * getAttribute() - inverse of the setAttribute() i.e it returns the value of a specified attribute that has been already set
 * getElementByTagName() is a method used to get references to all the elements in a webpage that have a specific tag name. returns a collection of elements one can access like an array(using loops, counters)
 * */

document.getElementById("cute_cat").setAttribute("width", "500px");
document.getElementById("cute_cat").setAttribute("height", "500px");
document.getElementById("cute_cat").setAttribute("alt", "a fat cute cat");

//store reference to the picture in a variable 
let cuteCat = document.getElementById("cute_cat");

//sets attribute for the cat photo
{
    cuteCat.setAttribute("width", "400px");
    cuteCat.setAttribute("height", "400px");
    cuteCat.setAttribute("alt", "A fat orange cat");
}

/**store the id of the cat picture into a variable using the getAttribute() method */
let cuteCadID = cuteCat.getAttribute("id");

cat_text.innerHTML += "'" + cuteCadID + "'";

//getElementByTagName is used mostly when fetching data and printing it out
let finalDivRef = document.getElementById("final_div");

//get all references to elements whose name are div
let allDivs = document.getElementsByTagName("div");

let count;
//&lt; - less than sign
//&gt; - greater than sign
//print out id attribute of all div tags
for (count = 0; count < allDivs.length; count++) {
    finalDivRef.innerHTML += "&nbsp;" + allDivs[count].getAttribute("id");
}

//javascript DOM - CSS
/**
 * object properties representing the css property will share the same name as them but will follow the typical property naming convention i.e. camelCase
 */
let count1;
let allDivs1 = document.getElementsByTagName("div");

for (count1 = 0; count1 < allDivs1.length; count1++) {
    //appling styling to all elements that have "div" as their tag name
    allDivs1[count1].style.borderBlock = "purple";
    allDivs1[count1].style.borderStyle = "double";
    allDivs1[count1].style.borderWidth = "5px";
    allDivs1[count1].style.borderRadius = "15px";
    allDivs1[count1].style.width = "fit-content";
    allDivs[count1].style.padding = "5px";
}

//javascript DOM events
/**
 * when interacting with webpages actions occur called events
 * things happen such as clicking a button, opening the page, typing som etext, fosung on a text field, hovering over a picture
 * with events (and javascript DOM), actions can be defined that will occur when an event triggers(occurs) through adding a specific type of method called an event listener that watches the webpage "listening" to the webpage for events that have been triggered. for each type of event its listened to (for each element), one needs a unique listener to it
 * a specific chunk of code (placed in a function) will run when event occurs. the code is called an event handler as it handles what should happen when an event occurs
 * onclick attribute of button element is used to listen. its a prebuilt event listener that is bult for the <button> tag with the code that is an event handler
 * event listeners and handlers, how they work with the HTML DOM and how they can influence the elements on the page
 * different elements have different actions that occur on them i.e. they throw different events, and there are prebuilt event listeners that only work on some elements/events
 * event listeners can be added to HTML elements by adding them as attributes to the element with values being the chunk of code or function that will handle them
 * unsing the addEventListener() method via javascript file that takes two arguments. first argument being the name of the event listener(from a list of prebuilt ones). second argument is a chunk of code or the function that will serve as the event handler. doing something when event occurs
 * adding events listener either as an attribute or via the addEventListener() method are both similar processes. only difference is naming the event listener
 * calling event listener that will activate when a user clicks on a button. doing it as an atrtribute will require to be named as onclick=[event_handler] while  via addEventListener() method it will be addEventListener("click", [event_handler])
 * event, event listeners and event handlers
 */
/**
 * onload - when openin a webpage, it is loaded to browser memory. the onload event listener ill determine what happens when a webpage is loaded into the browser memory either by being loaded freshly from its source or being refreshed after it has been loaded. used with body tag of webpage. guaging when it has loaded inot the browser memory
 */
let body = document.getElementById("body");
//handles what happens when the body element (representing the webpage overall) has been loaded in
{
    /**
     * add an event listener to listen for when the page loads i.e. it listens to the page-loading event
     */
    body.addEventListener("load", whenLoaded());
    /**
     * event handler that is called when th page loads i.e the code will run when the page loader event occurs
     * 
     */
    function whenLoaded() {

        /**
         * the setTimeOut() function tells browser to wait for a specified amount of milliseconds (second argument) before it perfroms an action specified via a callback function (first argument)
         * 
         */
        setTimeout(howLongAgo, 5000);
        setTimeout(welcome, 7000)
    }
    //print the time since the body element was loaded
    function howLongAgo() {
        document.getElementById("load").innerHTML += 'youre page loaded 5 second ago, right?'
    }
    function welcome() {
        //store the title of the page
        let title = document.getElementById('title').innerHTML;
        document.getElementById("load").innerHTML += "thank you for visiting this page - " + title;
    }
}
//click event - trigged when an element is clicked
//store a reference to a div element that has the id of = 'changing_div'
let changinDiv = document.getElementById("changing_div");

//set the properties of changing_div div element
{
    changinDiv.style.border = 'solid';
    changinDiv.style.borderWidth = '5px';
    changinDiv.style.width = '500px';
    changinDiv.style.height = '300px';
    changinDiv.style.borderColor = 'black';
}

//store reference to the button
let purple_border_button = document.getElementById("purple_border");
let blue_border_button = document.getElementById("blue_border");
let light_green_border_button = document.getElementById("lightgreen_border");

//add event listener to the button that turns the border purple
purple_border_button.addEventListener("click", changeToPurple);
function changeToPurple() {
    changinDiv.style.borderColor = 'purple';
    changinDiv.innerHTML = 'border color is now purple';
}

//add event listener to the button that turns the border blue
blue_border_button.addEventListener("click", changeToBlue);
function changeToBlue() {
    changinDiv.style.borderColor = 'blue';
    changinDiv.innerHTML = 'border color is now blue';
}

//add event listener to the button that turns the border lightgreen
light_green_border_button.addEventListener("click", changeToLightGreen);
function changeToLightGreen() {
    changinDiv.style.borderColor = "lightgreen";
    changinDiv.innerHTML = 'border color is now lightgreen';
}
//play, pause and playing - these event listeners work with media files on webpage
