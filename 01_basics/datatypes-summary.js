// Primitive

// 7 types- String, Number, Boolean, Null, Undefined, Symbol, BigInt

let count = 100;
let scoreValue = 100.33;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id===anotherId);

const bigNumber= 565466456545546546n;  //BigInt

//Reference(Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
console.log(heros);

let myObj = {
    name: "Shailesh",
    age: 27,
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}
myFunction();

console.log(typeof outsideTemp); //object datatype
console.log(typeof bigNumber); // bigint datatype
console.log(typeof myFunction);  // function object datatype
