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