// WINDOW METHODS / OBJECTS/ PROPERTIES

// console.log(123);

// Alert
// window.alert('Hello World');

//Prompt

// const input = prompt();
// alert(input);

//Confirm

// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner Height and Width
val = window.innerHeight;
val = window.innerWidth;

//Scroll Points
val = window.scrollY;//vertical access no scroll bars if 0
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;//5500
val = window.location.href;
//val = window.location.search;

//Redirect
//window.location.href = 'http://google.com';

//window.location.reload();


//history object
// window.history.go(-1);
// val = window.history.length;//6 sites behind us

//Navigator Object/Browser it self not window

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);