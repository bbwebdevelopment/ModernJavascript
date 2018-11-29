let re;
// literal characters
re = /hello/;
re = /hello/i;

// Meta Character Symbols - must start with case insensitive with I
re = /^h/i; // must start with

re = /world$/i; // must end with value and case insensitive

re = /^hello$/i; // must begin and end with

re = /h.llo$/i; // Matches any ONE character

re = /h*llo$/i; // matches any character 0 or more times

re = /gre?a?y/i; // optional character

re = /gre?a?y\?/i; // escaping character


// string to match
const str = 'Gray?';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);