//scopes & hoisting
/*
scope refers to the accessibility of variables depending on where variable is declared or initialized
1-global scope
2-function(local) scope
3-block scope




*/

var x = 6;
function scopeTest() {
    var x = 55;
    return x;

}
//call x variable within the function scopeTest()
console.log(scopeTest());

//call x variable declared in the global scope
console.log(x);

{
    //variable in block scope must be declared with "let"
    let x = 19;
    console.log(x);
    //variable declared ni block is inaccessible outside the block
}

//hoisting
/**
 * the art of raising or lifting somethin
 * ability to use variables before being defined
 * only word with the var keyword
 * outputs error if let and const are used when calling varing before declared
 * only word for declaration and not initialization
 * 
 * 
 * 
 */

x = 15; //initialization 
console.log(x); //access of variable through the var keyword

//y = 17;
//console.log(y); //tries to access the variable before declaration

let y; //does not work with hoisting after declaration
var x; //declaration as "var" 

//constant must be initialized upon declaration (and cannot be reinitialized)

const z = 19;

//document.getElementById("vaild").innerHTML += "<br>this call variable x" + "<br> whose output is" + x; //string concatination

//regular expressions
/**
 * quantifiers
 * character classes -ranges and meta characters
 * assertions
 * validation in the html from frontend and backend
 * two method of creating patterns to test user input -literals and constructors
 * 
 * 
 */
//letral

{
    //constructor creates an object that uses a method arguments as th regEx input
    const regEx2 = new RegExp("apple1");

    function regExpTester(testText) {
        var regEx = /apple1/; //letral
        if (regEx.test(testText) == true) {
            return "this pattern (" + regEx + ") is found in the text pattern (" + testText + ") <br/>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br/>";
        }
    }

    console.log(regExpTester("'The apple has fallen from the tree'"));
    console.log(regExpTester("'The password is apple1'"));
}

//search
let a = 'monday';
let b = a.search("day");
let c = a.search(/day/i);

//replace
let d = a.replace(/mon/i, 'fri');

//test
let e = /day/i.test(a);
let f = /days/i.test(a);

//execute a section 
let g = /day/i.exec(a);

//more practice
let h = "'Today's date is 3rd Match 2023"
let hh = "Today's date is 3rd Match 2023"
let i = /[a-zA-Z0-9]/i.test(h);
let ii = /[a-zA-Z0-9]/i.test(hh);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(i);
console.log(ii);

//quantifiers
/**
 * are special characters when combined with typical RexEx patterns
 * one can define what number of characters they wish to have or not have in the pattern
 * 
 *  * - character should occur 0 or more times
 *  + - 1 or more of the character needs to occur in the input for the test to return true
 *  ? - 0 or 1 of the character must be inputed
 *  {[number of times]} - explicitly states the minimum and maximun numbee of occurrences for a character. creates a range of occurrences that ones desire
 * ([minimum,]) - explicitly states the minimum number of occurences of a character but set no maximum amount
 *  
 */
{
    //demonstrate the use of "zero or more" regEx quantifier

    function regExpTester(testText) {
        let regEx = /an*/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }
    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));
}
{
    //demonstrate the use of the "one or more" RegEx quantifier

    function regExpTester(testText) {
        let regEx = /an+/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));
}

{
    //demonstrate the use of "zero or one" RegEx quantifiers
    function regExpTester(testText) {
        let regEx = /an?/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));
}
{
    /* Demonstrates the use of the 'Number of Times' RegEx Quantifier */
    function regExpTester(testText) {
        let regEx = /an{2}/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}

{
    /* Demonstrates the use of the 'Minimum and Maximum' RegEx Quantifier */
    function regExpTester(testText) {
        let regEx = /an{1,2}/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}
{
    /* Demonstrates the use of the 'Minimum and No Maximum' RegEx Quantifier */
    function regExpTester(testText) {
        let regEx = /an{3,}/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}


//regular expressions - character classes
/**
 * ranges
 * [A-Z] [A,B,C,D,E,F,.......Z]
 * [a-z] [a,b,c,d,e,f........z]
 * [0-9] [0,1,2,3,4,.......9]
 */

{
    /* Demonstrates the use of the Uppercase Range in RegEx */
    function regExpTester(testText) {
        let regEx = /[A-Z]/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}
{
    /* Demonstrates the use of the Lowercase Range in RegEx */
    // Valid if input contains a lowercase value of either b, c, d, e, or f
    function regExpTester(testText) {
        let regEx = /[b-f]/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}

{
    /* Demonstrates the use of the Number Range in RegEx */
    // Valid if the input contains a digit from 1 to 8

    function regExpTester(testText) {
        let regEx = /[1-8]/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));

}


//meta-characters
/**
 * special symbols that RegEx engine recognizes to mean specific checks to be made
 * \s - returns true if input contains at least one white space character such as tab
 * \d - returs true if there is any digit in the input
 * \w - alphanumeric characters - return true if input has upercase or lowecase character digits, or a digit. its a combination of [A-za-z0-9]
 * \D - matches true if there is one none-digit similar to [^0-9]
 * \W - returns true if there is atleast one non-alphanumeric character is in input such as white-spaces and symbols
 * \S - matches a non-whitespace character
 * | - disjuction character class and functions like the OR operator. tells system that input is valid if one of two conditions is valid. process is called alternation
 * 
 */

{
    /* Demonstrates the use of the Whitespace Character Class in RegEx */

    function regExpTester(testText) {
        let regEx = /\s/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say 'a apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'annn'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));
}
{
    /* Demonstrates the use of the Digit Character Class in RegEx */
    function regExpTester(testText) {
        let regEx = /\d/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'annn'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));

}

{
    /* Demonstrates the use of the Alphanumeric Character Class in RegEx */
    function regExpTester(testText) {
        let regEx = /\w/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("'annn'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));

}

{
    /* Demonstrates the use of the Non-digit Character Class in RegEx */
    function regExpTester(testText) {
        let regEx = /\D/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("4"));
    console.log(regExpTester("'4'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));

}

{
    /* Demonstrates the use of the Non-alphanumeric Character Class in RegEx */
    function regExpTester(testText) {
        let regEx = /\W/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("4"));
    console.log(regExpTester("'4'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}

{
    /* Demonstrates the use of the Non-whitespace Character Class in RegEx */
    function regExpTester(testText) {
        let regEx = /\S/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester(" "));
    console.log(regExpTester("'4'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));


}

{
    /* Demonstrates the use of the Disjunction Character Class in RegEx */
    function regExpTester(testText) {
        let regEx = /\d|\S/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester(" "));
    console.log(regExpTester("'4'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));

}

//RegEx Assertions
/**
 * extra customization to help add pattern-matchin process in regular expressions
 * ^ - refers to start odf string. patters yhat follows the assertion to thr start of string, should not return true
 * $ - refers to the end of a string. inverse of ^ and returns true if chaacters appended occur at end of string
 * 
 */

{
    // Demonstrates the String Start Assertion
    // Checks if the entered string has "Patrick" at its start
    function regExpTester(testText) {
        let regEx = /^(Patrick)/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("Patrick is a good boy"));
    console.log(regExpTester("'4'"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));
}

{
    // Demonstrates the String End Assertion
    // Checks if the entered string has "Patrick" at its end
    function regExpTester(testText) {
        let regEx = /(Patrick)$/;

        if (regEx.test(testText) == true) {
            return 'the pattern (' + regEx + ") is found in the pattern (" + testText + ")<br>";
        } else {
            return "this pattern (" + regEx + ") is not found in the text pattern (" + testText + ") <br>";
        }

    }

    console.log(regExpTester("'Do you say '1 apple'?'"));
    console.log(regExpTester("'No, it is'an apple''"));
    console.log(regExpTester("Patrick is a good boy"));
    console.log(regExpTester("4 days to go Patrick"));
    console.log(regExpTester("'Don't just annul parts of the English Language'"));
}
