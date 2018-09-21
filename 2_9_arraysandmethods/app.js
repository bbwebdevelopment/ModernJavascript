// create some arrays
const numbers = [43,56,33,23,44,36,5];//default
const numbers2 = new Array(22,45,33,76,54);//object constructer
const fruit = ["apple", "banana", "orange", "pear"];
const mixed = [22, "hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

//get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);//true
val = Array.isArray("hello"); /*false useful with DOM and nodeslist */

// get a single value
val = numbers[3];//position of value or index/23 of numbers

val = numbers[0];//43

//Insert into array
numbers[2] = 100;//replaces

//find index of value

val = numbers.indexOf(36);//5 position in variable

// Mutating arrays

// numbers.push(250);//added 250 at the end
// numbers.unshift(120);//added to beginning of array

// //take off back
// numbers.pop();//removes 250

// //take numbers off the front
// numbers.shift();//removes 120

// //splice values in the array
// numbers.splice(1, 3);//where to start, and where to end.

// //reverse
// numbers.reverse();//flips array

// //concatenate arrays
// val = numbers.concat(numbers2);//adding arrays together 9 values

//sort arrays
// val = fruit.sort();//alphabetical order
// val = numbers.sort();// by index

// //use the compare function
// val = numbers.sort(function(x, y){
//  return x - y;
// });

// //reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

//find 
// function under50(num){
//   return num < 50;
// }

//  val = numbers.find(under50);//first number under 50

//over 50
function over50(num) {
  return num > 50;
}


val = numbers.find(over50);//first number under 50


console.log(numbers);
console.log(val);
