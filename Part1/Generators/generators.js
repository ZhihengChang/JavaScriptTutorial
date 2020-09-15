//regular functions return only one, single value
//Generators can return multiple values, one after another
//generator function:
function* generateSequence(max){
    for(let i = 1; i <= max; i++){
        yield i;
    }
}
//it returns a special object called generator object
let generator = generateSequence(3);
console.log(generator);

//The main method of a generator is next()
//when called, it runs the execution until the nearest yield value
//then the function execution pauses and the yielded value is returned to the outer code
let zero = generator.next();
console.log(JSON.stringify(zero));
let one = generator.next();
console.log(JSON.stringify(one));
let two = generator.next();
console.log(JSON.stringify(two));
//done
let three = generator.next();
console.log(JSON.stringify(three));

//Generators are iterable
//print out all even number
generator = generateSequence(6);
for(let value of generator){
    if(value % 2 == 0){
        console.log(value);
    }
}

//as generators are iterable, we can call all related functionality
//for example: ...
let sequence = [0, ...generateSequence(3)];
console.log(sequence);

//generator composition
//yield* syntax to embed one generator into another
function* generate(start, end){
    for(let i = start; i <= end; i++) yield i;
}
function* generatePasswordCodes(){
    yield* generate(48, 57);
    yield* generate(65, 90);
    yield* generate(97, 122);
}
let str = '';
for(let code of generatePasswordCodes()){
    str += String.fromCharCode(code);
}
console.log(str);

//yield not only returns the result to the outside
//but also can pass the value inside the generator
function* gen(){
    let result = yield "2 + 2 = ?";
    console.log(result);
}
generator = gen();
console.log("Question: " + generator.next().value);
userInput = 4;
generator.next(userInput);

//generator.throw
function* gen2(){
    try {
        let result = yield "2 + 2 = ?";
        console.log("some code");
    } catch(e) {
        console.log(e);
    }
}
generator = gen();
console.log("Question: " + generator.next().value);
generator.throw(new Error("Wrong Answer"));