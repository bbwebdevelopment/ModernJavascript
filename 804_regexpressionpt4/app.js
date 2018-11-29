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


// brackets [] - Character Sets
re = /gr[ae]y/i; //must be an A or E best practice <<<<
re = /[GF]ray/; //most be uppercase G or F
re = /[^GF]ray/i; //Match anything except a G or F carrot inverts to not equal, dont confuse with outside carrot to begin with.
re = /[A-Z]ray/; // Match any uppercase letter
re = /[A-Za-z]ray/; // match any lowercase letter
re = /[0-9]ray/;  // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {x} amount of times

re = /Hel{2,4}o/i; // Must have between 2 to 4 exactly {x} amount of times

re = /Hel{2,}o/i; // Must have between 2 or more {x} times

// Parentheses () - Grouping
re = /([0-9]x){3}/;

//Shorthand Character Classes
re = /\w/; //word character - alphanumeric or _
re = /\w+/; // + 1 or more
re = /\W/; // non word characters
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // non digit characters
re = /\s/; // match whitespace char
re = /\S/; // match non whitespace character
re = /hell\b/i ; // word boundary

// Assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y


// string to match
const str = 'x';

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