//Async and await are special syntax to work with promises
//async:
// a function always returns a promise
async function f(){
    return 1;
}
//return a promise
f().then(console.log)

//await
//this makes JS wait until that promise setttles and returns its result
async function f2(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    //The function execution pauses, waiting for the promise settle
    let result = await promise;
    console.log(result);
}
f2();
//NOTE: can NOT use await in regular functions


//Error handling
//if promise rejected:
async function f() {
    await Promise.reject(new Error("Whoops!"));
}
//is same as:
async function f() {
    throw new Error("Whoops!");
}
//NOTE: when using async/await, .then is rarely needed
//because await handles the waiting, and try catch instead of catch
//await also works well with promise.all
