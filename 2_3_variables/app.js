/*var older format. let, const have big advantages with block level scope */

// //var name = "John Doe"; //can be single or double qu
// console.log(name);
// name = "Steve Smith";
// console.log(name);//reassign var and let, not const

// //Init Variable
// var greeting;//setting to undefined
// console.log(greeting);//undefined
// // greeting = "Hello";
// console.log(greeting);//usefull for conditionals

// Variables can include, letters, numbers, _, $
// Cannot start with a number

/*var 1name ="John Doe" throws error with syntax error */
//$ usually used for Jquery 
//var_name ="John"//used mostly for private variables

// Multiword variables

// var firstName ="John";//camelcase
// var first_name ="Sarah";//underscore convention
// var FirstName = "Tom";/* Pascal case, used for cont objects,class*/
// var firstname = "joe";//not recommended
// console.clear();

// LET
// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

//CONST cannot be reassigned, makes code more robust
const name ="John";
console.log(name);
//Cannot be reassigned
// name = "Sara";

//Cannot init, must be assigned value 
// const greeting;

const person = {
  name: "John",
  age:30
}// object literal

console.log(person);

//mutate const

person.name = "Sara";
person.age = 32;
console.log(person);

//can be used with arrays
const numbers =[1,2,3,4];
numbers.push(6);//method to addon to array

console.log(numbers);//changed items to const, just cant change 
//numbers=[1,2,3,4,5,6]/*throws error as this cannot be reassigned*/




