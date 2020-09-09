function f(){
    console.log("Hello");
}
function f2(a, b){
    console.log(a + b);
}
Function.prototype.defer = function(ms){
    //setTimeout(this, ms);
    let f = this;
    return function(...args){
        setTimeout(()=>f.apply(this, args), ms);
    }
}
f.defer(1000);
f2.defer(1000)(1, 2);

