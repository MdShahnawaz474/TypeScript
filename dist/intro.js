"use strict";
let x = 101;
// x= "nclnljs"
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Ahaan");
// Return something
function abcd() {
    return 12;
}
abcd();
function string() {
    return "ROhit";
}
//Void means it is not returning anything;
function Void() {
    return console.log("Hi this is a void function");
}
Void();
var Direction;
(function (Direction) {
    Direction["top"] = "TOP";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
    Direction["bottom"] = "Bottom";
})(Direction || (Direction = {}));
var Human;
(function (Human) {
    Human["name"] = "MD SHAHNAWAZ";
    Human[Human["age"] = 25] = "age";
})(Human || (Human = {}));
console.log(Human.name);
let b = "A";
let c = true;
let variable;
variable = "rohit sharma";
let variable2;
variable2 = "786";
if (typeof variable2 === "string") { }
function callAfter1s(cb) {
    setTimeout(cb, 1000);
}
callAfter1s(function () {
    console.log("Hii there");
});
// Without Interface
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greetUser(user) {
    console.log("hi there " + user.firstName);
}
isLegal({
    firstName: "Ahaan",
    lastName: "Khan",
    age: 20,
});
function isLegalUser(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegalUser({
    firstName: "Ahaan",
    lastName: "Khan",
    age: 19,
});
// Types
function greetType(id) { }
greetType(1);
greetType("2");
function greet2(id) { }
greet2(1);
greet2("2");
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
maxValue([1, 2, 3]);
// Array tuples
let arr = [1, "rohit"];
let Arjun = {
    name: "Arjun khanpur",
    numberOfManager: 49,
};
let earth = {
    name: "earth",
    population: 800000000,
    cities: 90,
};
let Ahaan = {
    name: "Ahaan khan",
    age: 20,
    email: "mdshahnawaz@gmail.com",
};
let ahaanAge = "12";
function getUser(user) {
    return user.age;
}
function getMandetail(man) { }
function getSweet(getSweet) {
    getSweet.name;
}
function IsVegFood(isVeg) {
    isVeg.isVeg;
}
// Classes
class Airpod {
    constructor() {
        this.price = 25000;
        this.image = "image/airpod";
        this.color = "white";
    }
    playMusic() {
        console.log("music is playing..");
    }
    switchMode(mode) {
        console.log(mode);
    }
}
class AirConditionFunctionality {
    constructor() {
        this.color = "white";
        this.category = "ac";
        this.company = "Voltas";
        this.temprature = 22;
    }
    turnOnAc() {
        console.log("Turning On ");
        console.log("Turned on.");
    }
    turnOff() {
        console.log("TurnOFf....");
    }
    raiseTemprature() {
        this.temprature++;
        console.log(this.temprature);
    }
    decreaseTemprature() {
        console.log("decreasing temprature 1");
    }
}
let ac = new AirConditionFunctionality();
let ac2 = new AirConditionFunctionality();
ac.raiseTemprature();
ac.raiseTemprature();
class penDrive {
    constructor() {
        this.company = "HP";
        this.price = 1200;
    }
}
class food {
    constructor() {
        this.price = 1200;
    }
    eat() {
        console.log("Eating");
    }
}
class Sweet extends food {
    constructor() {
        super(...arguments);
        this.name = "Sweet";
    }
}
let Cake1 = new Sweet();
class Pendrive {
    constructor() {
        this.company = "HP";
    }
}
let p1 = new Pendrive();
let p2 = new Pendrive();
console.log(p1);
console.log(p2);
// Constructor
class PendriveWithConstructor {
    constructor() {
        this.company = "HP";
    }
}
class Laptop {
    constructor(name) {
        this.company = name;
    }
}
let i3 = new Laptop("sandisk");
console.log(i3);
let i5 = new Laptop("Realme");
class earPhone {
    constructor(name) {
        this.brandName = name;
    }
}
let boatEarBuds = new earPhone("Realme");
console.log(boatEarBuds);
let RealmeEarBuds = new earPhone("Realme Ear buds");
console.log(RealmeEarBuds);
class Mouse {
    constructor(isWireless) {
        this.mouseName = isWireless;
    }
}
let mouseHp = new Mouse(false + "yes");
console.log(mouseHp);
// Private
class table {
    constructor(Name, Price) {
        this.name = Name;
        this.price = Price;
    }
}
let DiningTable = new table("yes bought", 1200);
console.log(DiningTable);
// Parameter
class basics {
    constructor(name, classes, shift, email, password) {
        this.name = name;
        this.classes = classes;
        this.shift = shift;
        this.email = email;
        this.password = password;
        this.name = name;
        this.classes = classes;
        this.shift = shift;
        this.password = password;
        this.email = email;
    }
}
console.log(basics);
// Modifier
class Box {
    constructor() {
        this.name = "circle";
    }
    getName() {
        console.log(this.name);
    }
}
let AnotherBox = new Box();
let square = (AnotherBox.name = "Square");
console.log(AnotherBox.name);
console.log(square);
class balance {
    constructor() {
        this.accBalance = 1200;
    }
    getAccBalance() {
        this.accBalance = 12000;
        console.log(this.accBalance);
    }
}
let u1 = new balance();
console.log(u1.getAccBalance());
// Read only property
class abcd {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let abcd1 = new abcd("harsh");
abcd1.getName();
// Getter and setter:-
class Getter {
    constructor(userName) {
        this.userName = userName;
        this.userName = userName;
    }
    get name() {
        return this.userName;
    }
    set name(name) {
        this.userName = name;
    }
}
let getter1 = new Getter("Ahaan");
console.log(getter1);
class Animal {
    constructor(name) {
        this.name = name;
    }
    get animalName() {
        return this.name;
    }
    set animalNames(name) {
        return (this.name = name);
    }
}
let animal1 = new Animal("Monkey");
animal1.animalNames = "Donkey";
console.log(animal1.animalNames);
// Additional functions
function str() {
    return "HIII";
}
function type(a, b) {
    return (a = 393), (b = "clksd");
}
function option(name, age, gender) { }
