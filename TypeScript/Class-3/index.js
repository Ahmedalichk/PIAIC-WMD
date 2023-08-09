"use strict";
const promptSync = require('prompt-sync')();
// let usereName = promptSync('Enter Your Name..')
// console.log('Your Name is : ', usereName)
//FUNCTION
// function myFunction() {
//     console.log('Hello World');
// }
// myFunction();
// function myFunction2(userName:string) {
//     console.log(`Hello ${userName}`);
// }
// myFunction2('Ali');
//[21,25,30,45]
let arr = [31, 35, 40, 45];
console.log(arr);
function missingIndex(list) {
    var a = list[0];
    var b = list[list.length - 1];
    console.log('first value of array is :', a);
    console.log('last value of array is :', b);
    var i = 0;
    for (a; a <= b; a++) {
        let findNum = list.find(elem => elem === a);
        if (findNum != a) {
            console.log('at ', i, ' index value is ', a);
        }
        i++;
    }
}
missingIndex(arr);
