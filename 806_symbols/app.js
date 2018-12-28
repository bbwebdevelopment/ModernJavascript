// Create Symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${sym1.toString()}`)

// unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4'

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for IN
for(let i in myObj) {
  console.log(`${i} : ${myObj[i]}`)
}

// symbols are ignored by JSON.strigify 
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
