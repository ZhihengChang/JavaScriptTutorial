//Symbol.iterator
let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function(){
    //return the iterator object
    return{
        current: this.from,
        last: this.to,
        //next() is called on each iteration by the for of loop
        next(){
            if(this.current <= this.last){
                return{
                    done: false, value: this.current++
                };
            }
            else{
                return {
                    done: true
                };
            }
        }
    };
};

for(let num of range){
    console.log(num);
}
/*
NOTE:
the range itself does not have the next() method 
the iterator object is separate from the object it iterates over.
*/

range = {
    from: 1,
    to: 5,

    //return the range object itself
    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },

    next(){
        if(this.current <= this.to){
            return{done: false, value: this.current++};
        }
        else{
            return {done: true};
        }
    }
};

for(let num of range){
    console.log(num);
}
//however now it cant have two for of loops running over the object at the same time
//because they all share the iteration state, iterator is object itself

//String is iterable
//for each character
for( let char of "test"){
    console.log(char);
}

//explicitly:
let str = "hello";
let iterator = str[Symbol.iterator]();
while(true){
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}
//NOTE: iterables are objects that implement the Symbol.iterator method

let arrayLike = {
    //has indexes and length => array-like
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    length: 4
};
// Error: no symbol.iterator
// for(let item of arrayLike){}

//Array.from(obj[, mapFn, thisArg])
let arr = Array.from(arrayLike);
//takes an iterable or array-like value and makes a "real Array" from it
console.log(arr);
let iter = Array.from(range);
console.log(iter);

//with mapFn:
iter = Array.from(range, num => num * 2);
console.log(iter);

//work with string:
let chars = Array.from(str);
console.log(chars);
