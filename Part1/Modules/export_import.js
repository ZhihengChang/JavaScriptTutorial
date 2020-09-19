//Export and Import
//ex:
export let num = 1;
export let items = ['Apple', 'Water', 'bread'];
export const VALUE = 0;
//NOTE: no semicolons after export class/function
export function sayHi(user){
    alert('Hello, ' + user);
}

//Export apart from declarations
function a(){
    alert("a");
}
function b(){
    alert("b");
}
export {a, b};
//similar for import

//Import all use: 
//import * as letter from './export_import.js';

//import under different names:
//import {a as A, b as B} from './export_import.js';

//Export "as"
function c(){
    alert("c");
}
export{c as C};

//Export default
//one thing per module
export default class {
  constructor(name) {
    this.name = name;
  }
}
//NOTE export default class and function can without name

//default name
// function d(){
//     alert(d);
// }
// export {d as default};
//NOTE same as export default
//      only one default per file