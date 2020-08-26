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