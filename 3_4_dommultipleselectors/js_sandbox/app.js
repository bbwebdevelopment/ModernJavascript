//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');

// // console.log(items);
// // console.log(items[0]);

// items[0].style.color = 'red';
// // can be accessed like array
// items[3].textContent = 'Hello';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// can be specific about ul with query selector

// console.log(listItems);

//document.getElementsByClassName

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'hello'

//conver HTML COLLECTION into an array

// lis = Array.from(lis);
// lis.reverse();


// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

//document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

//Foreach loop
liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
};
console.log(items);// node list// 


