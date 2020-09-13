//When a promise rejects, the control jumps to the closest rejection handler.
/*
fetch()
    .then(...) if resolved proceed to the next .then
    .then(...) if rejected go to the closest catch
    .then(...) 
    .catch(err) <- catched the err
*/

//implict try catch:
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(console.log); 
//is the same as:
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(console.log);

//.catch block finishes normally. the next successful .then handler is called.
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
})
.catch(function(error) {
    console.log("The error is handled, continue normally");
})
.then(() => console.log("Next successful handler runs"));

//NOTE: if there there is an error in the promise -> promise rejected
//and there is no catch to handle the error, the script dies