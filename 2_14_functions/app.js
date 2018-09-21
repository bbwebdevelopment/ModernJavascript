// function declarations  


function greet(firstName = 'John', LastName = 'Doe'){
  
  return 'Hello ' + firstName + ' ' + LastName;
}
//pass in nambe within greet parenthesis 
//console.log(greet());


//function expressions

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// imeddiately invokable function expressions = IIFEs
// function that you run and declare at the same time, using an an expression 
// 

// (function (name) {
//   console.log('hello ' + name);
// })('Mike');

// Property Methods

const todo = {
  add:function(){
    console.log('add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


