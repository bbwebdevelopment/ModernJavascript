const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city:'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;

// get specific value
val = person.firstName;//Steve
val = person['lastName'];//alternate method
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address.city;
val = person.getBirthYear();


console.log(val);

//arrays of objects
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Brad', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);// as long as length is less than array then console.log names
}