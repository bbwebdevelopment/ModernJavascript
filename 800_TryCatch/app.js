const user = {email: 'jdoe@gmail.com'};


try {
  //produce a reference error
  // myFunction();

  // produce typeerror
  // null.myFunction();
  
  // will produce sytax error
  // console.log(eval('Hello World'));
  if (!user.name) {
    throw 'user has no name';
  }
} catch(e) {
  // without e param
  // console.log('its null')
  // console.log(e)
  // whats wrong
  console.log(e);
  // error name
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('finally runs regardless of results');
}
//allows code to continue instead of stopping script
console.log('program continues');