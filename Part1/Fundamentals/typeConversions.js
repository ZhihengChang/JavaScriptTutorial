//convert a value to a string
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

//Numeric Conversion
//automatic:
console.log("6"/"2");
//Number():
console.log(typeof Number("123"));

//if the string is not a valid number, the result is NaN
let age = Number("an arbitrary String instead of a number");
console.log(age);

/*
Numeric conversion rules:
undefined  -> NaN
null       -> 0
true/false -> 1/0
String     -> whitespaces from the start and end are removed,
              if empty string return 0. Otherwise, the number
              is read from the string. if error return NaN
*/

/*
Boolean Conversion rules:
0, empty string, null, undefined, NaN -> false
other values                          -> true
*/
console.log(Boolean("hello"));
console.log(Boolean(" ")); 
//this return true because it is not considered as empty string
console.log(Boolean(""));