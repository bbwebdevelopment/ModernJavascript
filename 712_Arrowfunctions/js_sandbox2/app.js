const http = new EasyHTTP;

// get users

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// user data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}
// Create user
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));


  // Make an update post request
  // http.put('https://jsonplaceholder.typicode.com/users/2', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err));

  // make  a delete request 
  http.delete('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
