//Primitive

// string
const name = "John Doe"
console.log(typeof name);//string

//Number
const age = 12;//no quotes around numbers
console.log(typeof age);// Number

//Boolean
const hasKids =true;// no quotes not a string
console.log(typeof hasKids);//boolean

//Null is technically bug based on older implementation. 
// Null is a primitive type but will show as an object as bug
const car = null;

console.log(typeof car);//object
//let 

let test;

console.log(typeof test);//undefined

//symbol (es6 new primitive type)
const sym = Symbol();

console.log(typeof sym);//symbol


// Reference Types - Objects

const hobbies = ["movies", "music"];

console.log(typeof hobbies);//object

const address = {
  city: "boston",
  state: "MA"
}//object

const today = new Date();// new object
console.log(today);//prints date and time
console.log(typeof today);//shows object


