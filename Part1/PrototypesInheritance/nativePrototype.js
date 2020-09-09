//Changing native prototypes:
//Native prototypes can be modified, for instance 
//if we add a method to String.prototype it becomes available to all strings
String.prototype.show = function(){
    console.log(this);
};
"Hello".show();

//Polyfilling is the only one case where 
//modifying native prototypes is approved:
if(!String.prototype.repeat){
    String.prototype.repeat = function(n){
        //repeat the string n tiems
        return new Array(n + 1).join(this);
    }
}
console.log("La".repeat(3));

//some methods of native prototypes are often borrowed
let obj = {
    0: "zero",
    1: "one",
    2: "two",
    length: 3
};
obj.join = Array.prototype.join;
console.log(obj.join(","));
