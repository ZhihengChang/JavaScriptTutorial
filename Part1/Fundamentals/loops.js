//while and for
let i = 3;
while(i){
    console.log(i);
    i--;
}

console.log("######");
//Curly braces are not required for a single-line body
i = 3;
while(i) console.log(i--);

console.log("######");
//do...while loop
i = 0;
do{
    console.log(i);
    i++;
}while(i < 3)

console.log("######");
//for loop
//NOTE: i could also be decleared outside the for loop
for(let i = 0; i < 3; i++){
    console.log(i);
}
//NOTE: any part of for can be skipped
console.log("---");
let j = 0;
for(; j < 3; j++){
    console.log(j);
}

console.log("---");
let k = 0;
for(; k < 3;){
    console.log(k++);
}

//break: break out of the loop
//continue: continue to the next iteration
//Note: break/continue is not allowed on the right side of ?
// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Sum: ' + sum );
console.log("######");
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

console.log("######");
//Js allows label loops
outer: for(let i = 0; i < 3; i++){
    inner: for(let j = 0; j < 3; j++){
        console.log(i, j);
        if(i + j == 4){
            break outer;
        }
    }
}