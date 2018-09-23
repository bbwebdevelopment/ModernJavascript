let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


val = listItem;
val = list;

//Get child nodes
val = list.childNodes;

// Get children element nodes/no text just elements
val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - ELement
// 2 - Attribute (deprecated)
// 3 - Text node
// 4 - Comment
// 9 - Document itself
// 10 - Doctype

//Get Children Element Nodes
//val = list.children;
val = list.children[3];
list.children[1].textContent = 'Hello';

//children of children
list.children[3].children[0].id = 'test-link';//inserts id
val = list.children[3].children[0];

//first child
val = list.firstChild;//first node
val = list.firstElementChild;//used most

//last child
val = list.lastChild;
val = list.lastElementChild;//used most

// Count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling 

val = listItem.nextSibling;//nodes
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//get prev sibling
val = listItem.previousSibling;//nodes
val = listItem.previousElementSibling;




console.log(val);