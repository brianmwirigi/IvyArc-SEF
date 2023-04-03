//object oriented programming
// javascrift is a scripting and object oriented programming language
//has classes vs objects
/**
 * object oriented programming enables easy definition and reuse of code
 */
/**
 * objects are variables nd can contain any value
 * each OOP blueprint is called a class and each instance of a class called an object
 * each class presents a data structure blueprint that tells the computer-specific data to store and specific instructions on how to use the data
 * data is stored in on computer memory called attributes/properties and instructions are stored as functions/methods
 * each instance of a class ie object will inherit the variables(properties) and functions that are defined in its class and can use them freely
 */
/**
 *  key OOP concepts
 * Abstraction - meaning only revealing what is necessary to be known. each object only has access to the necessary data that exists within another object without the need to fully understand all the features
 * Encapsulation - neatly packed data and functionality (methods) into a single entity which is a class. compliments abstraction and in data security
 * Inheritance - OOP class being able to inherit the data and functionality of others. allows easy reuse of defined data and prevent unnecessary bloated programming code. inherited class is called a parent class (super-class) and the inheriting class is known as the child class(sub-class)
 * Polymorphism - ability to inherit sub-classes to define and apply its properties nd functionality(method) while still inheriting and being able to freely utilise the functionality of its present class. can be used as an extension/by-product of inheritance
 */

/**
 * constructions
 * class is a blueprint while object is instance of a class
 * a constructor is a specific javascript function found in a javascript class
 * enables editing of javascript class create and store its methods
 * it is required in creating objects from classes
 * jin javascript, constructors are not explicitly named (even though it is a function)
 * constructor - (keyword) is used in classes
 * later called using the new - (keyword) and class name 
 * 
 */
//objects have key :value pairs
//object variable

const car = {
    brand: 'toyota',
    year: 2008,
    receipt: function () { //methods for an object
        return 'youve bought a ' + this.brand + "  " + this.year + " for 2 million"
    },
}

console.log(car.brand); //access properties stored in key : value pair
console.log(car["brand"]); //access properties stored in key : value pair
console.log(car.receipt());

//constructor of object
function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}
const brian = new Car("mercedes", 2002); //instance of object
const john = new Car("toyota", 2022);

console.log(brian.brand);

//adding new property to an object
brian.color = 'blue';

console.log(brian.color);

Car.country = 'germany'; //output error...must be declared in the constructor

console.log(brian.country); //undefined

//built in javascript constructors that can be used to create objecs
new String();
new Number()
new Date();
new Boolean()
new Object();
new Array();
new RegExp();
new Function();

const date = new Date();
console.log(date);


//methods for an objects
//first letter of a class name must be uppercase
//classes are variables
//advisable to use const when declaring variables


class CarDetails {
    //class properties
    bodyColor;
    bodyWidth;
    bodyHeight;
    bodyLength;

    //method that is a constructor for CarDetails class with properties
    constructor(bodyColor, bodyHeight, bodyLength, bodyWidth) {
        //the variables below, the 'this' keyword is used to refer to the object the constructor is creating
        //the code below informs the computer that when the constructor is called and arguments initialized, the values should be passed on the class properties serving as the new valuu

        this.bodyColor = bodyColor;
        this.bodyHeight = bodyHeight;
        this.bodyLength = bodyLength;
        this.bodyWidth = bodyWidth;
    }
    receipt() {
        return "The cars color is " + this.bodyColor + " with the following height " + this.bodyHeight
    }
}
let kevin = new CarDetails('blue', 44, 66, 22);

console.log(kevin)
console.log(kevin.receipt());


//object of carFactory class is created using its constructor 
class CarFactory {
    //function below creates and abstract scenario that involves car factory admin informing their workers the new car (object) that makes from the desing (class)
    //classes and objects allow different blocks of javascript code to interact with each other, easily sharing their properties and methods 

    //function of object Carfactory that returns 'adminmessage' variables value
    messageToWorkers() {
        //constructor of the CarDetails class being called, its properties being initiallized when its called

        let newCar = new CarDetails("Red", "220cm", "145cm", "350cm")
        let adminMessage = "the car should have the following deatils: " + " Body Color - " + newCar.bodyColor + " " + " Body Height - " + newCar.bodyHeight + " " + " Body Length - " + newCar.bodyLength + " " + " Body Width - " + newCar.bodyWidth;

        return adminMessage
    }
}

console.log(new CarFactory().messageToWorkers());


//inheritance is when a class inherit properties and functions of another class. 
//the keyword extends is used
//not a good because a class that inherited the properties from another class in turn be inherited by a third class
//a class calledd vehicle is created that contains general property details of vehicles

class Vehicles {
    constructor(length, breadth, height) {
        //creates property for class, gives them value passed as arguments when the class is created via constructor
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
}


//class reperesends an aeroplane
//will access and utilize the properties of its parent class whilst using some properties specific to it
class Boeing747 extends Vehicles {
    constructor(length, breadth, height, brand, model, passengerCount) {
        //the same was 'this' keyword is used when refering to an object we are working with, 'super' keyword refers to the parent object of the focused one
        //therefore the length, height and breath are given to the constructor of the Boeing747 class are passed a s arguments to the constructor of its parent class vehicles

        super(length, breadth, height);

        this.brand = brand;
        this.model = model;
        this.passengerCount = passengerCount;
    }

    /**
     * function that returns the plane details
     * will be able to access its parents properties using javascript inheritance and 'super' keyword
     */
    stateDetails() {

        return "the Boeing747 has the folling properties:" + "length - " + this.length + " " + "breadth - " + this.breadth + " " + "height - " + this.height + " " + "brand - " + this.brand + " " + "model - " + this.model + " " + "passenger Count - " + this.passengerCount;
    }
}
let boeing747 = new Boeing747(76, 25, 64, 19.8, "boeing", 747, 600)
console.log(boeing747);
console.log(boeing747.stateDetails());