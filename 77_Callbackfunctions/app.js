const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body:'This is post two'}
];
// // create post pass in post
// function createPost(post) {
//   // mimic server response
//   setTimeout(function() {
//     // adding on to array 
//     post.push(post);
//   }, 2000)
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML
//   }, 1000);
// }

// createPost({title:'Post Three', body:'This is post three'});

// getPosts();
// callback is waiting for Get posts
function createPost(post, callback) {
  // mimic server response
  setTimeout(function() {
    // adding on to array 
    post.push(post);
    callback();
  }, 2000)
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML
  }, 1000);
}
// callback to get posts along with passing object of create post
createPost({title:'Post Three', body:'This is post three'}, getPosts);