console.log("external script");

//how to declare variables
var firstname = "Brian ";
q = 10;
console.log(q);

let secondname = "Mwirigi";
console.log(secondname);
secondname += " Maingi";
console.log(secondname);
let fullname = firstname + secondname;
console.log(fullname);
secondname = 9;
console.log(secondname);

const a = 22
const b = "james";
const concatination = a + " " + b;

console.log(typeof concatination);

//naming convention of variables
const snake_case = "snake case";
const kebabcase = "Kebab";
const PacsalCase = "pascal case";
const camelCase = "camel case";

//data types
const string = 'name';
const integer = 5;
const boolean = true;

const date = new Date();
const object = {
    key: "value",
    name: "Brian Mwirigi",
    age: 22,
    address: {
        no: 3297,
        street: "karen"
    },
    haircolor: "black",
    children: ["allan", "kerry", "violet"],
}
const array = ["kevin", "james", "samson", 55, 22, 11, 7, ["John", "phillip", 3], { nationality: "kenyan", religon: "christian", street: 22 }];

console.log(string, integer, boolean, object, array, date);

//functions
function myName() {
    console.log(fullname);
    const date = new Date();
    console.log(date);
}

myName();

//after EA6 declaration of anonymous function
const add = (x, y) => {
    return x + y

}

//arithmetic operations
//assignment operators - asign a value to a variable using =
//comparison operators -compare value of variables
//logical operatos
//conditional operatos

/* arithmetic operations
PADMAS
parenthesis ()
Addition +
Subtraction -
Multiplication *
Division /
exponential operator **

*/

//relational (comparison) operator
/*
equal to ("==") compares value
equal to ("===") compares type and value
less than operator ("<")
greater than operator (">")
less than operator or equal to ("<=")
greater than operator or equal to (">=")
*/

const x = 8;
const y = 7;

console.log(x > y); // true
console.log(x < y); //false
console.log(x <= y); //false
console.log(x >= y);//true

console.log(x == y); //false 
console.log(x == 8); //true
console.log(x == "8"); //true

console.log(x === y); //false
console.log(x === "8"); //false
console.log(x === 8); //true

console.log(x != 6); //true
console.log(x != 8); //false
console.log(x !== 8); //false
console.log(x !== "8"); //true
console.log(x !== "8"); //true


//logical operators
/*
"AND" (&&)
"OR" (||)
"NOT" (!)
*/



//mini-calculator

//adds two numbers
function addition(num1, num2) {
    let addition = num1 + num2;

    parameter01 = arguments[0];
    parameter02 = arguments[1];

    return "the sum of " + parameter01 + " and " + parameter02 + " is " + addition;

}

document.getElementById("addition").innerHTML = addition(4, 5);

//subtracting two numbers
function subtraction(num1, num2) {
    let subtraction = num1 - num2;

    parameter01 = arguments[0];
    parameter02 = arguments[1];

    return "the subtraction of " + parameter01 + " and " + parameter02 + " is " + subtraction;

}

document.getElementById("subtraction").innerHTML = subtraction(4, 5);

//Multiplication two numbers
function multiplication(num1, num2) {
    let multiplication = num1 * num2;

    parameter01 = arguments[0];
    parameter02 = arguments[1];

    return "the multiplication of " + parameter01 + " and " + parameter02 + " is " + multiplication;

}

document.getElementById("multiplication").innerHTML = multiplication(4, 5);

//Division two numbers
function division(num1, num2) {
    let division = num1 / num2;

    parameter01 = arguments[0];
    parameter02 = arguments[1];

    return "the division of " + parameter01 + " and " + parameter02 + " is " + division;

}

document.getElementById("division").innerHTML = division(4, 5);

//parenthesis of more than two numbers
function parenthesis(num1, num2) {
    let parenthesis = (simple_addition(num1, num2)) - simple_division(num1, num2);

    parameter01 = arguments[0];
    parameter02 = arguments[1];

    return "the parenthesis calculation of '(" + parameter01 + "+" + parameter02 + ") - " + parameter01 + "/" + parameter02 + "' is " + parenthesis;

}

document.getElementById("parenthesis").innerHTML = parenthesis(4, 5);

function simple_addition(num1, num2) {
    let simple_addition = num1 + num2;
    return simple_addition;
}
function simple_division(num1, num2) {
    let simple_division = num1 / num2;
    return simple_division;
}


//extra arithmetic operators
/*
increment (++ and +=[num])
decrement (-- and -=[num])
modulus & remainder of division

*/

let num3 = 5;
//current state
document.getElementById("increment").innerHTML += "the current value of variable 'num3' is " + num3 + "<br><br>";
//increase
num3++;
document.getElementById("increment").innerHTML += "the value of variable 'num3' has been increased by 1 and it is now " + num3 + "<br>";
//increase by 7
num3 += 7;
document.getElementById("increment").innerHTML += "the value of variable 'num3' has been increased  by 7 and it is now " + num3 + "<br>";
//current state
document.getElementById("decrement").innerHTML += "the current value of variable 'num3' is " + num3 + "<br><br>";
//decrease
num3--;
document.getElementById("decrement").innerHTML += "the value of variable 'num3' has been decreased by 1 and it is now " + num3 + "<br>";
//decrease by 7
num3 -= 7;
document.getElementById("decrement").innerHTML += "the value of variable 'num3' has been decreased  by 7 and it is now " + num3 + "<br>";

// check if the num3 variable is an even number
if (num3 % 2 == 0) {
    document.getElementById("modulus").innerHTML += "the value of the 'num3' variable " + num3 + " is an even number.";
} else {
    document.getElementById("modulus").innerHTML += "the value of the 'num3' variable " + num3 + " is an odd number.";

}


//conditional statements
//+= operator adds the return value of the function to the end of the HTML element ie it appends the element instead of replacing existing elements
function equal_numbers(num1, num2) {
    if (num1 == num2) {
        return "yes the two arguments (" + num1 + " and " + num2 + ") have the same value";
    } else if (num1 === num2) {
        return "yes, the two arguments (" + num1 + " and " + num2 + ") do have have the same value and data type";
    } else {
        return "No, the two arguments (" + num1 + " and " + num2 + ") do not have the same value";
    }
}
document.getElementById("ifStatement").innerHTML += equal_numbers(5, 5);
document.getElementById("ifElseStatement").innerHTML += equal_numbers(5, 6);


//if else statement
const person = "brian";
if (person === "thomas") {
    console.log("Good morning" + " " + person);
} else if (person === "mwirigi") {
    console.log("welcome back" + " " + person);
} else {
    console.log("Good morning everyone");
}
//switch statement
let num1 = 3;
let result;
switch (num1) {
    //value is given to each case
    //break keyword specifies the end of a case like a semi-coolon at the end of a line of code
    case 1:
        result = "the argument (" + num1 + ") is 1";
        break;
    case 2:
        result = "the argument (" + num1 + ") is 2";
        break;
    case 3:
        result = "the argument (" + num1 + ") is 3";
        break;
    case 4:
        result = "the argument (" + num1 + ") is 4";
        break;
    case 5:
        result = "the argument (" + num1 + ") is 5";
        break;

    default:
        result = "the argument (" + num1 + ") is less than 5";

}
document.getElementById("switchStatement").innerHTML = result;


//switch statment
switch (person) {
    case "Thomas":
        console.log("Good morning " + " " + person);
        break;
    case "Abigali":
        console.log("Good morning " + " " + person);
        break;
    case "mwirigi":
        console.log("Good morning " + " " + person);
        break;
    default:
        console.log("Good morning eeryone");
}

//loops are used mostly with arrays and to execute a line of code multiple times even with different output values
//for loop
const ye = 5;
let z = 0;
const array2 = [45, 4, 9, 16, 25];
//for loop syntax (declaration, condition , execution)
for (let i = 6; i <= ye; i++) {
    console.alog(i * 20)
}
while (z < 5) {
    console.log(z * 20);
    z++;
}
//array application with ofr or while loop
for (item in array2) {
    console.log(item + 3);
}