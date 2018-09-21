const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers

val = num1 + num2;//150
val = num1 * num2;//5000
val = num1 - num2;//50
val = num1 / num2;//2
val = num1 % num2;//modulas, divide and remainder

//Math Object
val = Math.PI;//can be methods inside object/3.14
val = Math.E;//eulers number 2.718...
val = Math.round(2.8);//3/2.4 rounds to 2
val = Math.ceil(2.4);//3
val = Math.floor(2.8);//2
val = Math.sqrt(64);//8
val = Math.abs(-3);//positive number or absolute number
val = Math.pow(8, 2);//64
val = Math.min(-2,33,4,1,55,6,3);//minimum numbers
val = Math.max(-2,33)//max number 
val = Math.random();//random decimal number
val = Math.floor(Math.random() * 21);//random between 0-19/0-20 =*21
//wrapped in floor to round to lowerr number with no decimal
console.log(val);

