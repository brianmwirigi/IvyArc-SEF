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
 * only workd with the var keyword
 * outputs error if let and const are used when calling varing before declared
 * only workd for declaration and not initialization
 * 
 * 
 * 
 */

x = 15; //initialization 
console.log(x); //access of variable through the var keyword

y = 17;
//console.log(y); //tries to access the variable before declaration

let y; //does not work with hoisting after declaration
var x; //declaration as "var" 

//constant must be initialized upon declaration (and cannot be reinitialized)

const z = 19;

document.getElementById("vaild").innerHTML += "<br>this call variable x" + "<br> whose output is" + x; //string concatination