/*
Comparisons
greater than           >
less than              <
Greater than or equal  >=
less than or equal     <=
Equals                 ==
Not Equals             != 
*/

//Boolean is the result of comparision
console.log( 2 > 1 ); 
console.log( 2 == 1 ); 
console.log( 2 != 1 ); 

//String comparison is compared letter-by-letter.
console.log( 'Z' > 'A' ); 
console.log( 'Glow' > 'Glee' ); // true because o is > e at index 2
console.log( 'Bee' > 'Be' ); // true because e is > null at index 2

//comparison of different types
//Javascript converts the values to numbers
console.log('2' > 1);
console.log(true == 1);

//A strict equality operator === checks the equality without type conversion
console.log(true === 1);

//Other comparison
console.log(null == undefined);
console.log(null === undefined); //false
