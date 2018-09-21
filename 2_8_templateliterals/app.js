const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// without template strings(es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job:' + job +'</li><li>' + city +'</li></ul>';
//document.body.innerHTML = html;//injects UL



 // html = '<ul>' +
 //   '<li>Name: ' + name + '</li>' + 
 //   '<li>Name: ' + age + '</li>' + 
 //   '<li>Name: ' + job + '</li>' + 
 //   '<li>Name: ' + city + '</li>' + '</ul>';

  //with template strings/literals
function hello(){
  return 'hello';
}
html =
    `<ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${age > 30 ? "Over 30" : "Under 30"}</li>
        <li>${2 + 2}</li> // expression
        <li>${hello()}</li>// returns function
    </ul>
`;
document.body.innerHTML = html//basically insert or conlog
