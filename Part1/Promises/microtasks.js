//Promise handlers .then/.catch/.finally are always asynchronous
//even when a promise is immediately resolved,
//the code on the lines below will still execute before these handlers
let promise = Promise.resolve();
promise.then(()=>console.log("promise done!"));
console.log("code finished");
//.then/.catch/.finally handlers are put into the queue
//they are not executed yet
//When JS engine becomes free from the current code,
//it takes a task from the queue and executes it

//to make it run after the promise:
Promise.resolve()
  .then(() => console.log("promise done!"))
  .then(() => console.log("code finished"));