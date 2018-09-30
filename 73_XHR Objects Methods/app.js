document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create xhr object
  const xhr = new XMLHttpRequest();

  //open (type, file or url, Async:true)
  xhr.open('GET', 'data.txt', true);

  // optional - used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }
  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

    }
  }

  // xhr.onreadystatechange = function() {
    // console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText)
  //   }
  // }

  // xhr.onerror = function() {
  //   console.log('request error')
  // }
  xhr.send();

    // readyState Values
    //  0: request not initialized
    //  1: server conntion established
    //  2: request received 
    //  3: processing request
    //  4:request finished and response is ready



  // HTTP Statuses 
  // 200:"OK"
  // 403:"Forbidden"
  // 404:"Not Found"
  
}