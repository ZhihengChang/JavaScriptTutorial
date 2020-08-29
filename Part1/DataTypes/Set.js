//A set is set of values without keys where each value may occur only once
/*
new Set(iterable)       -creates the set, if iterable object is provided
                         usually an array, copies values from it into the set
set.add(value)          -adds a value, returns the set itself
set.delete(value)       -removes the value, returns true if value existed
set.has(value)          -returns true if the value exists in the set
set.clear()             -removes everything from the set
set.size                -is the elements count
*/
let jhon = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};
let vistors = new Set();
vistors.add(jhon);
vistors.add(pete);
vistors.add(mary);
vistors.add(jhon);
vistors.add(mary);
//add with the same value don't do anything
console.log(vistors.size);

//Iteration
for(let vistor of vistors){
    console.log(vistor.name);
}

vistors.forEach((vistor) => console.log(vistor.name))