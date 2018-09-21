let val; // init variable and changing it instead of diff lets
//cannot use const

val = 1;
val = String(1);//changes to string by passing in number/1 lengt

// expression to string
val = String(4+4);//equals 8 then converts to string/1 length

// boolean to string
val = String(true);// val.length is 4

// date to string
val = String(new Date());//converts to string/57 length
val = String ([1,2,3,4,5]);// prints black strings/9 length

// toString method

val = (5).toString();//black and prints string/length 4

//String to number

val = Number("5");//5/number 5.00
val = Number(true);//1/number/1.00
val = Number(false);//0/number/0.00
val = Number(null);//0/number/0.00
val = Number("hello");//NAN-Not A Number
val = Number([1,2,3,4]);//NAN

val =parseInt("100");//100 as a number//100.00
val = parseFloat("100.31");//if zero 1 number without toFixed




//output
//console.log(val);
//console.log(typeof val);//number
//console.log(val.length);//only works on strings//undefined
//console.log(val.toFixed(2));//specify decimals of number passed
// in 0 = no dec 2 = 2 decimals


const val1 = String(5);
const val2 = 6;// changed to string and concatenated it
const sum = Number(val1 + val2);
console.log(sum);//56/String which is type conversion
console.log(typeof sum);