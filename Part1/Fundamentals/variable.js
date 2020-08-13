// "use strict";

//declearing single variable
let message = "hello";
//declearing multiple variables at the same time
let name = "Ryan", age = 21, gender = "male";
//declearing same variable twice will throw an error
// let message = "error!"

//$ and _ can be used when declearing a variable
let $ = "valid";
let _ = "also valid";

//when 'use strict':
// num = 5;
// console.log(num);
//will throw error because num is not properly defined

//when not 'use strict', num will be created if it does not exist
num = 5;
console.log(num);

//declearing a constant
const CANTCHANGETHIS = 10;
// CANTCHANGETHIS = 15 //will throw an error
console.log(CANTCHANGETHIS);