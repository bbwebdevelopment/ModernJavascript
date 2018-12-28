// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
// moves all additional values into an array under rest
// console.log(rest)

({ a, b } = { a: 100, b:200, c:300, d:400, e:500}); 
({ a, b, ...rest } = { a: 100, b:200, c:300, d:400, e:500}); 
// console.log(rest)

//array Destructuring 
// const people = ['John', 'beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);


// parse array returned from a function
// function getPeople() {
//   return ['John', 'beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// object destructuring 
const person = {
  name: 'John',
  age: 32,
  city: 'Miami',
  gender: 'male',
  sayHello: function() {
    console.log('Hello')
  }
}

// old es5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// new es6 destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);



sayHello();

