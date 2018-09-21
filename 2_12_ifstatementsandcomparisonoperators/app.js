const id = 100;

// // equal to
// if (id == 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // not equal to testing value not testing type
//   if (id != 101) {
//     console.log('CORRECT');
//   } else {
//     console.log('INCORRECT');
//   }

// // equal to value and type
// if (id === 100){
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }


// // not equal type and value
// if (id !== "100") {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }


// test if undefined
// if (typeof id !== 'undefined'){
//   console.log(`the ID is ${id}`);
// } else{
//   console.log("NO ID")
// }

// testing for greater or less than or equal too
// if (id >= 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// if else
const color = "Yellow";

// if (color === "red"){
//   console.log("Color is red")
// } else if (color === "blue"){
//   console.log("color is blue");
// } else {
//   console.log("color is not red or blue")
// }

//Logical Operators, && statement

const name = 'Steve';
const age = 35;

// if (age > 0 && age < 12){
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age < 19){
//   console.log(`@{name} is a teenager`)
// } else {
//   console.log(`${name} is an adult`);
// }

// OR race registration
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in the race`);
// } else {
//   console.log(`${name} is registered for the race`)
// }

// Ternary Operator 

console.log(id===100 ? "Correct": "INCORRECT");

// without Braces not recommended still need semi colon
if ( id === 100)
console.log("CORRECT");
else
console.log("INCORRECT");