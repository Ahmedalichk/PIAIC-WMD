"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync")();
let arry = ["Zia", "Usman", "Wania", "Ali"];
let temp;
for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
        if (arry[i] > arry[j]) {
            temp = arry[j];
            arry[j] = arry[i];
            arry[i] = temp;
        }
    }
}
console.log(arry);
//============================================================
// Task
// let arr1=[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20]
// 1. Find Even Numbers in an Array
// 2.Find Odd numbers in an Array
// 3.Find Sum of Array Elements
// 4.Find Maximum Number in an Array
// 5.Filter Positive Numbers from an Array and their sum
// 6.Filter Negative Numbers from an Array and their sum
//==========================================================
//1 find even numbers in an array
{
    let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, 13, 16, 15, 17, -18];
    let temp;
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] % 2 == 0 || arr1[i] % 2 == -0) {
            temp = arr1[i];
            console.log(temp);
        }
    }
}
//2 find odd numbers in an array
{
    let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, 13, 16, 15, 17, -18];
    let temp;
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] % 2 == 1 || arr1[i] % 2 == -1) {
            temp = arr1[i];
            console.log(temp);
        }
    }
}
//3 find sum of an array
{
    let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, 13, 16, 15, 17, -18];
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    console.log("sum of an array is: ", sum);
}
//4 find maximum number in an array
{
    let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, 13, 16, 15, 17, -18];
    let temp;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] < arr1[j]) {
                temp = arr1[j];
                arr1[j] = arr1[i];
                arr1[i] = temp;
            }
        }
    }
    console.log("maximum number of an array is: ", arr1[0]);
}
//5 filter positive numbers from an array and their sum
{
    let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, 13, 16, 15, 17, -18];
    let temp = [], sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            continue;
        }
        temp[i] = arr1[i];
        sum = sum + temp[i];
    }
    console.log("Positive numbers of an array: ", temp);
    console.log("sum of positive numbers of an array is: ", sum);
}
//6 filter negative numbers from an array and their sum
{
    let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, 13, 16, 15, 17, -18];
    let temp = [], sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            continue;
        }
        temp[i] = arr1[i];
        sum = sum + temp[i];
    }
    console.log("Negative numbers of an array: ", temp);
    console.log("sum of negative numbers of an array is: ", sum);
}
//====================================================
//Loop
//For loop
// for( initialization; condition; iteration)
let groceryItems = ["Bread", "cooking oil", "egg", "milk", "veg", "fruits"];
for (let item = 0; item < groceryItems.length; item++) {
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
}
// ======================================
// let groceryItems = ["Bread","cooking oil", "egg","milk","veg", "egg","fruits","egg"]
let eggCounter = 0;
for (let item = 0; item < groceryItems.length; item++) {
    if (groceryItems[item] == "egg" && eggCounter > 0) {
        continue; //skip
    }
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    if (groceryItems[item] == "egg") {
        eggCounter++;
    }
}
// ========================================
// how to comment multilines of code through shortcut keys
// ctrl + k +c  for comment
// ctrl + k+ u for uncomment
// ctrl + /   for both
//============================
//Buy item only Once
//let groceryItems = ["Bread","cooking oil", "egg","milk","veg","milk","cooking oil",  "egg","fruits","egg"]
let buyItems = [];
for (let item = 0; item < groceryItems.length; item++) {
    let val = buyItems.includes(groceryItems[item]);
    if (val) {
        continue;
    }
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    buyItems.push(groceryItems[item]);
}
//====================================================
//Buy items till milk
//let groceryItems = ["Bread","cooking oil", "egg","milk","veg","fruits"]
for (let item = 0; item < groceryItems.length; item++) {
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    if (groceryItems[item] == "milk") {
        break;
    }
}
// =====================================
{
    let arry = ["Usman", "Zia", "Wania"], temp;
    for (let i = 0; i < arry.length; i++) {
        for (let j = i + 1; j < arry.length; j++) {
            if (arry[j] < arry[i]) {
                temp = arry[i];
                arry[i] = arry[j];
                arry[j] = temp;
            }
        }
    }
    console.log(arry);
}
//============================================================
// Nested Loop
// Loop with in the Loop
//2D rows column 
let firstName = ["Jhon", "Smith", "Luke", "Dan"]; //row
let lastName = ["Brown", "David", "Mike"]; //col
let fullName = [];
for (let fName = 0; fName < firstName.length; fName++) {
    lastName[fName];
    for (let lName = 0; lName < lastName.length; lName++) {
        console.log(`Full Name will be ${firstName[fName]} ${lastName[lName]}`);
        fullName.push(`${firstName[fName]} ${lastName[lName]}`);
    }
}
console.log(fullName);
//===================================================================
// While
let state = "normal";
let counter = 0;
while (state != "hit") {
    console.log("runnig...");
    console.log("runnig...");
    console.log(counter);
    ++counter;
    if (counter == 3) {
        state = "hit";
    }
}
//===========================================
//Modules 
const firstModule_1 = require("./firstModule");
const firstModule_2 = require("./firstModule");
console.log(firstModule_2.city);
const firstModule_3 = require("./firstModule");
// let myName= "Usman"
// sirName= "Mr. Zia"
console.log(firstModule_3.myName);
console.log(firstModule_1.myName);
console.log(firstModule_1.myName);
//console.log(ksjdksda);
