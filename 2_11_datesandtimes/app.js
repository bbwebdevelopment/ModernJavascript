let val;

const today = new Date();
const myBirthday = new Date(1989, 0, 03)//specific formats
const myBirthday2 = new Date("1-3-1989");//specific formats
const myBirthday3 = new Date('1/3/1989 11:25:00')//with hours
let birthday = new Date('9/10/1981')

val = today.getMonth();//2 for march remember 0 based
val = today.getDate();//12 march 12th 
val = today.getDay();//1 for monday, o based
val = today.getFullYear();//2018
val = today.getHours();1//15 for 3.26 in 24 hours format
val = today.getMinutes();// 27, 3.27pm
val = today.getSeconds();//49 seconds
val = today.getMilliseconds();//358
val = today.getTime();//timestamp 

birthday.setMonth(2);//set let birthday to march, 0 based
birthday.setDate(12);
birthday.setFullYear(1983);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(birthday);

