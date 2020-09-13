//Promise is one of the solution to the problem:
//a sequence of asynchronous tasks to be performed one after another
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
.then(function(result) {
    console.log(result);
    return result * 2;
})
.then(function(result) {
    console.log(result);
    return result * 2;
})
.then(function(result) {
    console.log(result); // 4
    return result * 2;
});

//returning promise:
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
.then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(result * 2), 1000)
    });
})
.then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(result * 2), 1000)
    });
})
.then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(result * 2), 1000)
    });
});


