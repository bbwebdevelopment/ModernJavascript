// basic structure 

// (function(){
//   // Declare private vars and functions

//   return {
//     //Declare public vars and functions
//   }
// })();

//STANDARD MODULE PATTERN
// const UICtrl = (function() {

//   // PRIVATE 
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text
//   }
//   // PUBLIC
//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  // Private
  let data = [];
  
  function add(item){
    data.push(item);
    console.log('item added.....')
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }
  // Public
  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));