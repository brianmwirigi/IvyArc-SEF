/**
 * JSON stands for javascript object notation 
 * it is a structured way of transferring data across the web
 * stores data in key-value pairs similar to object data type
 * XML stands for extensible markup language which can also be used to transmit data but JSON is more lightweight and readable 
 * just like javascript variables, JSON objects come with their own syntax and data types
 * JSON objects are stored in key-value pairs and usable data types are -> string, Number, Boolean,Array, NUll(no value) and Object
 */

//a JSON Object literal that holds the details of a graduated school student
let student = {
    "firstName": "Brian", //string
    "middleName": null, //null (no value)
    "lastName": "mwirigi", //string
    "phoneNumber": "(+254)079-024-9996", //string
    "emailAddress": "bmmaingi17@gmail.com", //string
    "city": "Nairobi", //string
    "areCouncil": "langata", //string
    "dob": "10-12-1996", //string
    "age": 26, //number
    "educationLevel": "university degree", //string
    "graduationDate": "07-07-2023", //string
    "universityAdmission": true, //boolean
    "bestSubject": "['programming','AI','cybersecurity','networking']" //array

}

console.log(student);
console.log(student.middleName);
if (student.universityAdmission == true) {
    console.log("you are a registered student")

} else {
    console.log("not yet in university");
}

//converting JSON string to object
//JSON is used to interact with servers
//servers send all their data as strings therefore preventing some javascript functions on some of its values,
// to rememdy this, one convert JSON into a typical javascript object using a function called parse() which is the process of breaking something up into parts to make each part functional in its unique ways

//JSON data sent by a server to a client
const shape = '{"name":"rectangle","measurementUnit":"cm","length":"5","breadth":"15"}';

//turn JSON to string
const parseShape = JSON.parse(shape);
//calculation will work because operands (length and breadth) come as a string by default and converted to object
console.log(parseShape.length * parseShape.breadth)

//convert Javascript objects to JSON string
//javascript uses a method called stringfy() that is used when sending data to server while still maintain the JSON data structure needs changing data to string form object
//javascript object based on the prior JSON string

const testObject = { name: "rectangle", measurementUnit: "cm", length: "5", breadth: "15" };
const stringifiedTestObject = JSON.stringify(testObject);
if (typeof stringifiedTestObject === "string") {
    console.log("this is a string " + stringifiedTestObject)
} else {
    console.log("this is an object")
}