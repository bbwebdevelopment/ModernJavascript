const firstName = "William";
const lastName = "Johnson";
const age = 29;
const str = "Hello my name is mike"
const tags =" web design, web development"
let val;

val = firstName + lastName;//WilliamJohnson

//Concatenation
val = firstName + " " + lastName;//William Johnson/string space


//Append
val = "Mike ";
val += "Brown";//overwrites = /+= append

val = " Hello, my name is " + firstName + " and I am " + age;
// Hello my name is William and I am 29

// Escaping
val = 'That\'s awesome, I can\'t wait.'//escapes without using
// double quotes. escaping takes quotes powers away

// Length
val = firstName.length;//7 doesnt need parenthasis since propert

//concat with method
val = firstName.concat(' ', lastName);// but using concat method

// change case
val = firstName.toUpperCase();//WILLIAM
val = firstName.toLowerCase();//william

//Read only arrays which shows indexing
val = firstName[0];// W shows first character in array length
val = firstName[2];//l in william w0 i1 l2 remember 0 index!!

//indexOf method
val = firstName.indexOf('l');//2
val = firstName.lastIndexOf('l');// starts from end

// charAt()
val = firstName.charAt('2');//l from beginning

//get last character
val = firstName.charAt(firstName.length - 1);//m

//get substrings

val = firstName.substring(0, 4);//pulling will from william

//slice mostly used for arrays
val = firstName.slice(0, 4)// Will
val = firstName.slice(-3)// iam

//split()
val = str.split(' ');//["hello","my","name", "is", "mike"]
val = tags.split(',');/* turns into array for tags const split by comma*/

//replace
val = str.replace('mike', 'brad');//case sensitive

// includes() true or false based on if string
val = str.includes('Hello');//true
val = str.includes('food');//false





console.log(val);