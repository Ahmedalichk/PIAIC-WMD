console.log("Hello World");
console.log("Hi World");

if (true) {
  const myName = "Ahmed Ali";
  let myCity = "isb";
  let myCar: string = "Elantra";
  //myCar=23  // is pe error de ga kio k infer kr liya hai is ne k ye string datatype hai

  console.log('My name is \n\t\t', myName);
  console.log(myCity);
}
//ab let mycar block se bahir phr se declare kr k initialize kiya to phr naya bn gya ye so no problem
//var jahan marzi declare kro wo chale ga hr jaga wo global hai
let mycar = 234;

console.log(mycar);
//if k block k bahir access ni ho ga

let myAge = 20;
myAge = 23;

console.log(myAge);

const yourAge = 30;
//yourAge = 29      // is pe error kio k const hai

console.log(yourAge);

// const yourAge = 30

console.log(yourAge);

let undfnd;  // undefined data type
console.log("undefined is :", undfnd);

let empty = null;  // null data type
console.log("empty is null : ", empty);

let isMarried = true  //boolean data type

console.log(isMarried);
console.log

var firstName = 'Ahmed'
var lastName = 'Ali'
var fullName = firstName + ' ' + lastName
console.log('MY FULL NAME IS ', fullName)
console.log(firstName + " " + lastName);


console.log(`hellow how are you hellow how are you hellow how are you hellow how are you ${fullName} hellow how are you hellow how are you`);

let data = `hellow how are you hellow how are you hellow how are you hellow how are you ${fullName} hellow how are you hellow how are you`

//backtick is with ~before 1

let num1 = 15
let num2 = 20

let n = 5
console.log(n == 5)
console.log(n === 5)
console.log(num1 === num2)


//console.log(num1==num2) // typescript me error aye ga lkn JS me === lgao taake type aur value dono check kre == pe JS me value dekhe ga beshak string ho aur dosri value integer tb b true in JS in ==

