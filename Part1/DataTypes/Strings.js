//"" == '' == `` all represent strings
//Adventage of using backticks: allow a string to span multiple line:
let list = `List:
    * Item1
    * Item2
    * Item3
`;
console.log(list);

//for "" string use \n to make new line
/*
special character:
\n      new line
\r\n    line break
\', \"  quotes
\\      Backslash
\t      Tab
\b      Backspace
\f      form feed
\v      Vertical tab
*/

//String length
console.log("hello".length);

//Acessing characters:
let str = "hello"
console.log(str[0]);
console.log(str.charAt(0));

//NOTE: Strings are immutable, can't be changed in JavaScript
//it is impossible to change a character
//str[0] = 'H' //ERROR
// repalce works:
str = 'Hello';
console.log(str);

//change the case:
console.log(str.toUpperCase());

//Searching for a substring
let line = 'Widget with id';
console.log(line.indexOf('with'));
console.log(line.indexOf('hello'));
console.log(line.indexOf('id'));

//includes()
console.log(line.includes('with'));
console.log(line.includes('with', 11)); //form position 11

//start/end with
console.log(line.startsWith('Widget'));
console.log(line.endsWith('id'));

//get a substring
console.log(line.slice(0,5));
console.log(line.slice(6)); //from position 6
//reverse:
console.log(line.slice(-5,-1));

//substring(start [,length])
console.log(line.substr(0, 6)); //from 0 get 6 characters