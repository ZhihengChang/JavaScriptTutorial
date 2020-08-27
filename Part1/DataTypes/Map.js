//Map is a collection of keyed data items
//Map allows keys of any type
/*
new Map()           -creates the map
map.set(key, value) -stores the value by the key
map.get(key)        -returns the value by the key
map.has(key)        - returns true if the key exists, false ow
map.delete(key)     -removes the value by the key
map.clear()         - removes everything from the map
map.size            - returns the current element count
*/
let map = new Map();
map.set('1', 'one');
map.set(2, 'two');
map.set(true, 'boolean');
console.log(map.get('1'));
console.log(map.get(2));
console.log(map.get(true));
console.log(map.size);
//NOTE: Map can use objects as keys
//      Map use === to compare keys, NaN === NaN is true in this case
//      Map.set call returns the map itself, therefore:
map.set(3,3).set(4,4).set(5,5); //is valid

//Iteration over Map
/*
map.keys()      -returns an iterable for keys
map.values()    -returns an iterable for values
map.entries()   -returns an iterable for entries[key, value]
map.forEach()   -same as array
*/
for(let key of map.keys()){
    console.log(key);
}
for(let entry of map.entries()){
    console.log(entry);
}

//Map from object
let obj = {
    name: "Ryan",
    age: 21
};
let objMap = new Map(Object.entries(obj));
console.log(objMap.get('name'));

//Object from Map
obj = Object.fromEntries(map);
console.log(obj[1]);