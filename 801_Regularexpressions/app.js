let re;
// this itself is a reg expression
re = /hello/;
re = /hello/i;

// re = /hello/g // global search

// console.log(re);
// // minus slashes similiar to input.value
// console.log(re.source);


// exec() - Return result in array or null if no match

// const result = re.exec('hello world');

// returns array with where exression source starts index
// console.log(result);

// console.log(result[0]);

// console.log(result.index);

// console.log(result.input);

// case sensitive ex without I flag
// const result = re.test('Hello');
// console.log(result)


// match - Return result array or null

// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);


// search() Returns index of the first match if not found returns -1

// const str = 'mike Hello There';
// const result = str.search(re);

// console.log(result);


// replace() return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, "hi");

// console.log(newStr)




