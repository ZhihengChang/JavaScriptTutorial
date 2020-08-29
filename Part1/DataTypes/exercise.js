function filterRange(arr, a, b){
    return arr.filter(item => item >= a && item <= b);
}
console.log(filterRange([5,3,8,1], 1, 4));

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b) { return b - a; })
console.log(arr);

let Calculator = function(){
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    },

    this.calculate = function(exp){
        let expArr = exp.split(" ");
        let a = +expArr[0];
        let operator = expArr[1];
        let b = +expArr[2];
        if(!this.methods[operator]){
            return NaN;
        }
        return this.methods[operator](a, b);
    }

    this.addMethod = function(name, func){
        this.methods[name] = func;
    }
};

let calculator = new Calculator();
console.log(calculator.calculate("1 + 2"));

// return a string fill up with the char (fill_char), 
// and make max_len = _chars.length + item[0].length + item[1].length + ....
// If max_len < items.length, return ''. 
// if no items, then return a string with length of max_len.
function get_str_to_match_length(max_len, fill_char, ...items){
    let argLength = arguments.length;
    let len;
    if(argLength < 2){ return null; }
    else if(argLength == 2){
        len = max_len + 1;
    }else{
        let itemsLength = 0;
        for(let i = 2; i < arguments.length; i++){
            itemsLength += arguments[i].length;
        }
        if(itemsLength > max_len){
            len = 0;
        }else{
            len = max_len + itemsLength + 1;
        }
    }

    return new Array(len).join(fill_char); 
};

// let result = get_str_to_match_length(10, "a", "one", "two");
// console.log(result);
// console.log(result.length);

function get_str_to_match_length_enhenced(max_len, fill_char, items){
    return (typeof items == 'undefined')? fill_char.repeat(max_len) :
    fill_char.repeat((items.join('').length < max_len)? max_len + items.join('').length : 0);
}
result = get_str_to_match_length_enhenced(10, "a", ["one", "two"]);
console.log(result);
console.log(result.length);