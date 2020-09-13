/*
Promise:
let promise = new Promise(function(resolve, reject){
    //excutor
})
the executor runs automatically and attempts to perform a job. 
When it is finished with the attempt 
    -> it calls resolve if it was successful 
    -> or reject if there was an error.

The promise object returned by the new Promise constructor has these internal properties:
-state  — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
-result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
*/
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});
//after 1 sec, the excutor calls resolve to produce result
//state: pending -> fullfilled
//result: undefined -> done

promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
//after 1 sec, the excutor calls reject to reject the promise and produce an error
//state: pending -> rejected
//result: undefined -> error

//NOTE: there can be only one result or error
promise = new Promise(function(resolve, reject) {
    resolve("done");
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
});

//.then() method:
promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});
promise.then(
    result => console.log(result),
    error => console.log(error)
)

//.catch() same as .then(null, function(error))
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise.catch(console.log);

//.finally() same as .then(f, f) always run
//NOTE: finally is not meant to process promise result
promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
})
.finally(() => console.log("Promise ready"))
.then(result => console.log(result));