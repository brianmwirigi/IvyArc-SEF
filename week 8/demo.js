console.log("external script");

//how declare variables
var firstname = "Brian ";
x = 10;
console.log(x);

let secondname = "Mwirigi";
console.log(secondname);
secondname += " Maingi";
console.log(secondname);
let fullname = firstname + secondname;
console.log(fullname);
secondname = 9;
console.log(secondname);


const pi = "22";

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
const addition = (x, y) => {
    return x + y

}
