function sort_by(arr, column, order){
    function compare(a, b){
        const compareKey = compare.key;
        const compareOrder = compare.order;
        let comparison = 0;
        if(compareKey){
            const valueA = a[compareKey].toUpperCase();
            const valueB = b[compareKey].toUpperCase();
            console.log(valueA, valueB);
            if(valueA > valueB){
                (compareOrder == 'asc')? 
                    comparison = 1 : comparison = -1;
            }else if(valueA < valueB){
                (compareOrder == 'asc')? 
                    comparison = -1 : comparison = 1;
            }
        }
        console.log(comparison);
        return comparison;
    };

    compare.key = column;
    if(order == 'dec'){
        compare.order = order;
    }else{
        compare.order = 'asc';
    }
    return arr.sort(compare);
}



let a = {checked: true, label: "item", text: "pen"};
let b = {checked: false, label: "food", text: "rice"};
let c = {checked: false, label: "electronics", text: "charger"};
let d = {checked: true, label: "drink", text: "water"};
let e = {checked: false, label: "tool", text: "fork"};
let arr = [a, b, c, d, e];
// compare.key = 'label';
// compare.order = 'asc';
// console.log(arr.sort(compare));
// console.log(sort_by(arr, 'label', 'asc')); 

function work(a, b){
    console.log(a + b);
}
function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}
work = spy(work);
work(1, 2); 
work(4, 5); 
for (let args of work.calls) {
  console.log( 'call:' + args.join() );
}

function f(x) {
    console.log(x);
}
function delay(f, ms){
    return function(){
        setTimeout(()=> f.apply(this, arguments), ms);
    };
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
  
f1000("test1");
f1500("test2");
