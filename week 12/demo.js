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
console.log(student["age"]);
console.log(student.age);
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

//array object from string
const person = JSON.parse('{"employees":[{"name":"david","age":32},{"name":"john","age":33}]}');
console.log(person)

const companyInfo = {
    emplyeee: [
        { name: "david", age: 32 },
        { name: "john", age: 33 }
    ],
}

console.log(companyInfo.emplyeee[0])

//Array object into JSON string
const stringJson = JSON.stringify(companyInfo);
console.log(stringJson);

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

//XML is a markup language written using tags similar to HTML
/**
 * main difference is that HTML, one uses pre-built tags that have specific effects on browser
 * n XML , one can create tags that can be used to strucutre data.
 * XML tags cant change color of browser but are a greate way of storing data and values can can inturn be used to transmit data across various clients that inturn can be used for various purposes such as changing the color of browser
 * when creating XML, one uses case-sensitive tags as elements and must have opening and closing tag of an xml element or as an attribute-value pair that is put in the openning tago of XML element(also works with self-closing tag)
 * one can also combine both of these methods by having the alue of the element be in-between the opeing and closing tag while also having attributes in the opeing tag that add more data about the element value
 * NOTE: it is recommended to use non-attribute methods to store values to aid future editing and readability
 * xml is tored in a unique document type called .xml
 * below, we create an xml file that creates student profile 
 */

let student2 = [
    {
        "firstName": "Brian",
        "middleName": null,
        "lastName": "Mwirigi",
        "phoneNumber": "(+234)079-024-9996",
        "emailAdress": "bmmaingi17@gmail.com",
        "city": "nairobi",
        "areaCouncil": "langata",
        "dob": "14-03-1996",
        "age": 17,
        "educationLevel": "Secondary School",
        "graduationDate": "07-07-2022",
        "universityAdmission": false,
        "bestSubject": ["Mathematics", "english Language", "science"]
    },

    {
        "first_name": "Angela",
        "middle_name": "Therese",
        "last_name": "Simpson",
        "phone_number": "(+44) 517-678-9875",
        "email_address": "angie'shome@yahoo.com",
        "city": "Uxbridge",
        "areaCouncil": "Middlesex",
        "dob": "10-08-2000",
        "age": 21,
        "educationLevel": "Secondary School",
        "graduationDate": "19-06-2020",
        "universityAdmission": true,
        "bestSubjects": ["English Language", "Science", "Government"]
    },
]

//JSON vs XML
/**
 * json is easier to read and write compared to XML files
 * JSON utilizes various data types such as string, number and array whilst XML file only comes in the string data type
 * JSON files are smaller than XML thus easier to store
 * JSON does not need to be an individual file for it to be used. JSON data can be part of an independent javascript file while XML data must be stored in an independent XML file
 * XML uses user-deinfed tags to store and strucutre data while JSON uses name-value pairs of different data types
 * JSON data can be easily parsed into javascript objects whilst XML data is more vumbersome and require more PC overhead(resources) to perfrom
 */