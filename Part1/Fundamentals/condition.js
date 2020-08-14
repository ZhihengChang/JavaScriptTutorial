//The if statement
let age = 22;
if(age < 21){
    console.log("You are not allowed to drink alcohol");
}

//the else clause
let year = 2022;
if(year > 2021){
    console.log("I graduated from college");
}else{
    console.log("I'm still studying in college");
}

//pre-evaluated boolean value:
let isGreater = 3 > 2;
if(isGreater){
    console.log("The former is greater than the latter");
}

//several conditions: else if
let n = 6;
if(n > 100){
    console.log("too big");
}else if(n > 10){
    console.log("big");
}else if(n < 0){
    console.log("too small");
}else{
    console.log("close");
}

//Conditional Operator
let allowToDrink = (age > 21) ? true : false;
//if(age > 21) return true other wise false

//multiple ? same as if else if else
let person = (age < 10) ? "child" :
    (age <= 18) ? "teenager" :
    (age <= 30) ? "young man" :
    "man";
console.log(person);

//check for valid value in x
let x = null;
let hasValue = (isNaN(x) | typeof x == 'undefined'| !x)? false : true;
console.log(hasValue);

