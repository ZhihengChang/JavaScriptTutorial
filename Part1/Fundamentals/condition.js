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

//The switch statement can replace multiple if checks:
//NOTE: The type matters
let x = 3;
switch(x){
    case 1: console.log("one");
    break;
    case 2: console.log("two");
    break;
    case 3: console.log("three");
    break;
    default: console.log("the number is not 1,2, or 3");
}
//NOTE: if there is no break then the execution continues with the next case without any checks

//Grouping the cases:
x = 4;
switch(x){
    case 1: console.log("one");
    break;
    case 2: console.log("two");
    break;
    case 3: console.log("three");
    break;
    case 4:
    case 5: console.log("number greater than 3 but less then 6");
    break;
    default: console.log("the number is greater than 6");
}

//check for valid value in x
function hasValue(x){ 

    if(isArray(x) && x.length == 0) {
        return false
    };
    if(typeof x == 'object' && Object.keys(x).length == 0) {
        return false
    }
    if((x === 0)? true:false || x){
        return true;
    } 
    return false;

}

