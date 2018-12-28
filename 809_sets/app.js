// SETS - Store unique values of any type
const set1 = new Set();

// add values to set 
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
// will not add another item if already present, HAS TO BE UNIQUE
set1.add(100);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// get count
// console.log(set1.size);

// // check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John'}));
// console.log({name: 'John'} === {name: 'John'});

// delete from set
// set1.delete(100);
// console.log(set1)

// ITERATING THROUGH SETS
// set1.delete(100);
// FOR OF 
// for(let item of set1) {
//   console.log(item)
// };

// FOR EACH
// set1.forEach((value) => {
//   console.log(value);
// })

const setArr = Array.from(set1);
console.log(setArr)