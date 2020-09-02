//recursion is when function calls itself
function pow(x, n){
    return (n == 1)? x : x * pow(x, n-1);
}
console.log(pow(2,3));
/*
execution context stack
 ________________
|   pow(2,1)    | <-- n is equlas to 1
|_______________|     resumed previous function
|   pow(2,2)    | <-- n is not equals to 1
|_______________|     call pow(2,1)
|   pow(2,3)    | <-- n is not equals to 1
|_______________|     call pow(2,2)
NOTE: the recursion depth equals 
the maximal number of context in the stack
However, contexts take memory,
it requires the memory for n contexts,
A loop-based algorithm is more memory saving.
Any recursion can be rewritten as a loop
*/

//Recursive traversals
//search in a object:
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
};

function sumTo(n){
    return (n == 1)? 1: n + sumTo(n-1);
}
console.log(sumTo(100));

function factorial(n){
    return (n == 1)? 1: n * factorial(n-1);
}
console.log(factorial(5));

function fib(n){
    return (n <= 1)? n: fib(n-1) + fib(n-2)
}
console.log(fib(5));