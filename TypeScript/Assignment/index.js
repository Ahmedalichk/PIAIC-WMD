"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync")();
// =================================================================
//https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
//==================================================================
//==============================
// Array sorting
{
    let trav = [
        "japan",
        "tokyo",
        "pak",
        "malaysia",
        "holland",
        "america",
        "china",
        "greece",
        "bosnia",
        "poland",
        "france",
    ];
    console.log(trav);
    //ascending order
    console.log("Ascending sorted array ", [...trav].sort());
    //================================================
    console.log("reverse array ", [...trav].reverse());
    console.log("descending order array ", [...trav].sort().reverse());
}
//=============================================================================
// let userName = promptSync("Enter your Name.. ");
// console.log("Your Name is  ", userName);
// let nam = promptSync('enter your name :')
// console.log(nam);
// if(nam){
//     console.log(`good morning ${nam}`)
// }else{
//     console.log('thank you unknown')
// }
// let arr2 = [1, "Usman", true, "Afaq", 5];
// console.log("Original Array is", arr2);
// arr2.pop();
// console.log("New array with pop", arr2);
// arr2.push(15);
// console.log("New array with push is: ", arr2);
// arr2.shift();
// console.log("New array with shift is: ", arr2);
// arr2.unshift("Zia Khan");
// console.log("New array with unshift is: ", arr2);
// arr2.splice(2, 0, "Ali");
// console.log("After splice", arr2);
//replacing existing values
// arr2.splice(2, 1, "Ali");
// console.log("After splice", arr2);
//replacing existing values
// arr2.splice(2, 1, "Ali", "Ahmed", "Hamza");
// console.log("After splice", arr2);
//=================================================================
//Q2  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
{
    let personName = "ahmed ali";
    console.log(`Hello ${personName}, would you like to learn some Python today?`);
}
//Q3   Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
{
    let personName = "ahmed ali";
    console.log(`Person's Name is in Lower Case `, personName.toLowerCase());
    console.log(`Person's Name is in Upper Case `, personName.toUpperCase());
    let newName = personName
        .split(" ")
        .map((l) => l[0].toUpperCase() + l.substr(1))
        .join(" ");
    console.log(`Person's Name is in Title Case `, newName);
}
//Q4   Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
{
    console.log(`Albert Einstein once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."`);
}
//Q5   Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
{
    let famous_person = "Albert Einstein";
    let message = `${famous_person} once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."`;
    console.log(message);
}
//Q6   Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
{
    let sName = `\t\tAhmed Ali \n`;
    console.log("name with spaces ", sName);
    let nName = sName.trim();
    console.log("name with trimmed spaces ", nName);
}
//Q7   Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
{
    let addition = 4 + 4;
    console.log("Addition: ", addition);
    let subtraction = 16 - 8;
    console.log("Subtraction: ", subtraction);
    let multipllication = 4 * 2;
    console.log("Mltipllication: ", multipllication);
    let division = 64 / 8;
    console.log("Division: ", division);
}
//Q8  You should create four lines that look like this:
//======================================================================
// console.log(5 + 3)
//----------------------------------------------------------------------
// Your output should simply be four lines with the number 8 appearing once on each line.
{
    console.log("-".repeat(80));
    console.log(5 + 3);
    console.log("_".repeat(80));
    console.log(5 + 3);
    console.log("=".repeat(80));
    console.log(5 + 3);
    console.log("-".repeat(80));
    console.log(5 + 3);
}
//Q9  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
{
    let favNum = 9;
    let message = `My favorite number is ${favNum}`;
    console.log(message);
}
//Q10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
{
    // one way of commenting
    /* Second way of commenting */
}
//Q11  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
{
    let names = ["Ali", "Mustafa", "Ayan", "Rayan", "Hina", "Hira", "Rehan"];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);
    console.log(names[5]);
    console.log(names[6]);
}
{
    let names = ["Ali", "Mustafa", "Ayan", "Rayan", "Hina", "Hira", "Rehan"];
    console.log("\n\n");
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
//Q12  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
{
    {
        let names = ["Ali", "Mustafa", "Ayan", "Rayan", "Hina", "Hira", "Rehan"];
        console.log("\n\n");
        for (let i = 0; i < names.length; i++) {
            console.log(`Hello my good friend ${names[i]}. How are you, I hope all going good!!!`);
        }
    }
}
//Q13   Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
{
    let list = [
        "I would like to own a Honda Civic",
        "I would like to own a big house",
        "I would like to own a Mercedez",
        " I would like to own a Toyota Camry",
    ];
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
//Q14  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
{
    let guestList = ["Shahab", "Daniyal", "Noman"];
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Hey ${guestList[i]}, I would like to invite you for dinner, it will be my pleasure if you come.`);
    }
}
{
    console.log("\n\n");
    let guestList = ["Shahab", "Daniyal", "Noman"];
    guestList.forEach((guestName) => {
        console.log(`Dear ${guestName}, you are invited for dinner, please join us`);
    });
}
//Q15  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
{
    let guestList = ["Shahab", "Daniyal", "Noman", "Hasnain"];
    console.log("old guest list: ", guestList);
    let GuestNotComing = "Shahab";
    console.log(`${GuestNotComing} is not coming for dinner`);
    let newGuest = "Ahmed";
    let indexOfGuestNotComing = guestList.indexOf(GuestNotComing);
    guestList.splice(indexOfGuestNotComing, 1, newGuest);
    console.log("new guest list is: ", guestList);
    //==================
    //        FOR EACH
    //==================
    console.log("\n");
    console.log("=======IN FOR EACH LOOP=====");
    guestList.forEach((dost) => {
        console.log(`${dost}, do  join us for dinner today`);
    });
    console.log("\n");
    //==================
    //        FOR OF
    //==================
    console.log("=======IN FOR OF LOOP=====");
    for (let i of guestList) {
        console.log(`${i} join us`);
    }
}
//Q16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
{
    let guestList = [
        "Shahab",
        "Daniyal",
        "Noman",
        "Hasnain",
        "Ali",
        "Shahbaz",
        "Wasif",
    ];
    //1
    for (let i of guestList) {
        console.log(`Hello ${i}, we have found a bigger dinner table`);
    }
    //2
    guestList.unshift("Hamza");
    //3
    let middleIndex = Math.floor(guestList.length / 2);
    guestList.splice(middleIndex, 0, "Ahsan");
    //4
    guestList.push("Jibran");
    for (let i of guestList) {
        console.log(`Dear ${i}, You are invited on dinner`);
    }
}
// //Q17    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
{
    //1
    let guestList = [
        "Shahab",
        "Daniyal",
        "Noman",
        "Hasnain",
        "Ali",
        "Shahbaz",
        "Wasif",
    ];
    console.log("invitation for dinner is just for two people due to some issues");
    //2
    console.log("\n");
    while (guestList.length > 2) {
        let removeGuest = guestList.pop();
        console.log(`Dear ${removeGuest}, we are sorry we cannot invite you for dinner due to some issues occured`);
    }
    //3
    console.log("\n");
    for (let i of guestList) {
        console.log(`Dear ${i}, You are still invited for dinner`);
    }
    //4
    console.log("\n");
    while (guestList.length > 0) {
        guestList.pop();
    }
    console.log("Guest list after dinner: ", guestList, "\n");
}
// //18  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
{
    //1
    let places = [
        "Maryland",
        "Alberta",
        "Tokyo",
        "Makkah",
        "Madina",
        "Qatar",
        "Spain",
        "France",
    ];
    //2
    console.log("original array: ", places);
    //3
    console.log("array in alphabetical order: ", [...places].sort());
    //4
    console.log("original array: ", places);
    //5
    console.log("reverse alphabetical array: ", [...places].sort().reverse());
    //6
    console.log("original array: ", places);
    //7
    places.reverse();
    console.log("reverse array: ", places);
    //8
    places.reverse();
    console.log("again reverse array: ", places);
    //9
    places.sort();
    console.log("alphabetically sorted array: ", places);
    //10
    places.sort().reverse();
    console.log("reverse alphabetical sorted array: ", places);
}
//Q19   Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
{
    console.log("\n\n");
    let guestList = [
        "Shahab",
        "Daniyal",
        "Noman",
        "Hasnain",
        "Ali",
        "Shahbaz",
        "Wasif",
    ];
    console.log("we invited ", guestList.length, " people for dinner ");
}
//20  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
{
    let places = [
        "Maryland",
        "Alberta",
        "Tokyo",
        "Makkah",
        "Madina",
        "Qatar",
        "Spain",
        "France",
    ];
    console.log("\nLIST OF PLACES IS");
    for (let i of places) {
        console.log(i);
    }
}
//21   They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
{
    const car = {
        name: "corolla",
        company: "toyota",
        model: "2020",
        color: "white",
    };
    let cars = []; // Array of object
    cars.push(car);
    console.log(cars);
    const car1 = {
        name: "x3",
        company: "bmw",
        model: "2020",
        color: "white",
    };
    cars.push(car1);
    const car2 = {
        name: "s600",
        company: "mercedez",
        model: "2020",
        color: "white",
    };
    cars.push(car2);
    cars.push({
        name: "x5",
        company: "bmw",
        model: "2022",
        color: "white",
    });
    console.log(cars);
    function displayCars(cars) {
        for (let i of cars) {
            console.log(`\t    Car Name: ${i.name}
            Car Company: ${i.company}
            Car Model: ${i.model}
            Car Color: ${i.color}
            ------------------\n`);
        }
    }
    displayCars(cars);
}
// Q22   Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
{
    function Car(name, company, model, color) {
        return {
            name,
            company,
            model,
            color,
        };
    }
    const cars = [
        Car("corolla", "toyota", "2020", "white"),
        Car("x1", "bmw", "2020", "white"),
        Car("s600", "mercedez", "2020", "white"),
        Car("x5", "bmw", "2020", "white"),
    ];
    let invalid = 7;
    console.log(`array at invalid index number ${invalid} is ${cars[invalid]}`);
    cars.forEach((i) => {
        console.log(`\nCar Name: ${i.name}\nCar Company: ${i.company}\nCar Model: ${i.model}\nCar Color: ${i.color}`);
    });
}
//Q23  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
{
    let car = "subaru";
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == "subaru"); //true
    console.log("Is car == 'Subaru'? I predict True.");
    console.log(car == "subaru"); //false
    console.log("Is car == 'honda'? I predict True.");
    console.log(car == "honda"); //false
    console.log("Is car !== 'toyota'? I predict True.");
    console.log(car !== "toyota"); //true
    console.log("Is car !== 'mazda'? I predict True.");
    console.log(car !== "mazda"); //true
    console.log("Is car != 'subaru'? I predict True.");
    console.log(car != "subaru"); //false
    console.log("Is car == 'bmw'? I predict True.");
    console.log(car == "bmw"); //false
    console.log("Is car != 'bmw'? I predict True.");
    console.log(car != "bmw"); //true
    console.log("Is car === 'subaru'? I predict True.");
    console.log(car === "subaru"); //true
    console.log("Is car == 'subru'? I predict True.");
    console.log(car == "subru"); //false
}
//Q24  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
{
    let age = 25;
    console.log("Is age greater than 18? I predict true");
    console.log(age > 18); //true
    console.log("Is age greater than 18? I predict true");
    console.log(age < 18); //false
    let str1 = "abc";
    let str2 = "Abc";
    console.log(str1 === str2); //true
    console.log(str1 != str2); //false
    console.log(str2.toLowerCase() === str1); //true
    let a = 5, b = 10, c = 15;
    console.log(a === b); //false
    console.log(a > b); //false
    console.log(a < b); //true
    console.log(a != b); //true
    console.log(a < b && c > b); //true
    console.log(a > b || c > b); //true
    console.log(a > b && c > b); //false
    let arr = ["apple", "banana", "kiwi", "melon"];
    console.log(arr.includes("banana")); //true
    console.log(arr.includes("guava")); //false
    console.log(!arr.includes("apple")); //false
}
// //Q25  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
{
    let alien_color = "green";
    if (alien_color == "green") {
        console.log("Congrats! you have earned 5 points");
    }
    if (alien_color == "red") {
    }
}
//Q26  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
{
    let alien_color = "yellow";
    if (alien_color == "green") {
        console.log("Congrats! you have earned 5 points for shooting the alien");
    }
    else if (alien_color != "green") {
        console.log("Congrats! you have earned 10 points for shooting the alien");
    }
    else {
        console.log("alien is alive");
    }
}
//Q27  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
{
    let alien_color = "green";
    if (alien_color == "green") {
        console.log("Congrats! you have earned 5 points for shooting the alien");
        alien_color = "yellow";
    }
    else if (alien_color == "yellow") {
        console.log("Congrats! you have earned 10 points for shooting the alien");
        alien_color = "red";
    }
    else if (alien_color == "red") {
        console.log("Congrats! you have earned 15 points for shooting the alien");
    }
}
//Q28  Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
{
    let age = 25;
    if (age < 2) {
        console.log(`person is ${age} years old, person is a baby`);
    }
    else if (age >= 2 && age < 4) {
        console.log(`person is ${age} years old, person is a toddler`);
    }
    else if (age >= 4 && age < 13) {
        console.log(`person is ${age} years old, person is a kid`);
    }
    else if (age >= 13 && age < 20) {
        console.log(`person is ${age} years old, person is a teenager`);
    }
    else if (age >= 20 && age < 65) {
        console.log(`person is ${age} years old, person is an adult`);
    }
    else if (age >= 65) {
        console.log(`person is ${age} years old, person is an elder`);
    }
}
//Q29  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
{
    let favorite_fruits = ["mango", "melon", "kiwi"];
    if (favorite_fruits.includes("mango")) {
        console.log("You really like mangoes!");
    }
    if (favorite_fruits.includes("banana")) {
        console.log("You really like bananas!");
    }
    if (favorite_fruits.includes("melon")) {
        console.log("You really like melon!");
    }
    if (favorite_fruits.includes("kiwi")) {
        console.log("You really like kiwi!");
    }
    if (favorite_fruits.includes("strawberry")) {
        console.log("You really like strawberries!");
    }
}
//Q30  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
{
    let userName = ["ali", "hassan", "admin", "john", "david"];
    for (let i of userName) {
        if (i == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${i}, thank you for logging in again`);
        }
    }
}
//Q31  No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
{
    let userName = ["ali", "hassan", "admin", "john", "david"];
    if (userName.length == 0) {
        console.log("We need to find some users!");
    }
    userName.length = 0;
    console.log("We need to find some users!");
}
//Q32  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
{
    let current_users = [
        "ali",
        "babar",
        "hassan",
        "admin",
        "john",
        "david",
        "paul",
        "sean",
        "moin",
    ];
    let new_users = ["khizer", "babar", "absar", "moin", "asif"];
    console.log("\n\n");
    let lowerArr = [];
    for (let i = 0; i < new_users.length; i++) {
        lowerArr[i] = new_users[i].toLowerCase();
    }
    for (let i of lowerArr) {
        let taken = current_users.includes(i);
        if (taken) {
            console.log(`You need to enter a new username, because ${i} already taken`);
        }
        else {
            console.log(`The username ${i} is available`);
        }
    }
}
//Q33  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
{
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i of num) {
        let ordinal = "";
        if (i === 1) {
            ordinal = "st";
        }
        else if (i === 2) {
            ordinal = "nd";
        }
        else if (i === 3) {
            ordinal = "rd";
        }
        else {
            ordinal = "th";
        }
        console.log(`${i}${ordinal}`);
    }
}
//Q34  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
{
    console.log("\n");
    const pizza = ["Bar bq", "sausages", "pepperoni"];
    for (let i of pizza) {
        console.log(i);
    }
    for (let i of pizza) {
        console.log(`I like ${i} Pizza`);
    }
    console.log(`I really love Pizza`);
}
//Q35  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
{
    console.log("\n");
    const commonCharacteristic = "friendly";
    const animals = ["dog", "cat", "rabbit"];
    for (let i of animals) {
        console.log(`A ${i} would make a great pet.`);
    }
    console.log(`Any of these animals would make a great pet because they are ${commonCharacteristic}.`);
}
//Q36   T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
{
    function make_shirt(size, message) {
        console.log(`Making a ${size} sized shirt with a message: ${message}`);
    }
    make_shirt("large", "BEAUTIFUL WORLD");
}
//Q37  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
{
    console.log("\n\n");
    function make_shirt(size = "large", message = "I Love TypeScript") {
        console.log(`Making a ${size}-sized shirt with the message: "${message}"`);
    }
    // Call the function with default size and message
    make_shirt();
    // Call the function with default size and a different message
    make_shirt(undefined, "Programming is fun!");
    // Call the function with a medium-sized shirt and default message
    make_shirt("medium");
    // Call the function with a small-sized shirt and a custom message
    make_shirt("small", "Beautiful World");
}
//Q38  Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
{
    console.log("\n\n");
    function describe_city(city, country = "USA") {
        console.log(`${city} is in ${country}`);
    }
    describe_city("Karachi", "Pakistan");
    describe_city("Maryland");
    describe_city("Calgary", "Canada");
}
//Q39  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
{
    console.log("\n\n");
    function city_country(city, country) {
        return `${city}, ${country}`;
    }
    console.log(city_country("Maryland", "USA"));
    console.log(city_country("Calgary", "Canada"));
    console.log(city_country("london", "England"));
}
//Q40  Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
{
    function makeAlbum(artist, title, tracks) {
        const album = { artist, title };
        if (tracks !== undefined) {
            album.tracks = tracks;
        }
        return album;
    }
    const album1 = makeAlbum("Taylor Swift", "Fearless");
    const album2 = makeAlbum("Ed Sheeran", "÷ (Divide)", 16);
    const album3 = makeAlbum("Adele", "21", 12);
    console.log(album1);
    console.log(album2);
    console.log(album3);
}
//Q41  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
{
    function showMagicians(magicians) {
        for (let i of magicians) {
            console.log(i);
        }
    }
    const magicianNames = ["David", "Paul", "Sean", "Tom", "Harry"];
    showMagicians(magicianNames);
}
//Q42  Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
{
    function makeGreat(magicians) {
        for (let i = 0; i < magicians.length; i++) {
            magicians[i] = "The Great " + magicians[i];
        }
        return magicians;
    }
    function showMagicians(magicians) {
        for (let i of magicians) {
            console.log(i);
        }
    }
    const magicianNames = ["David", "Paul", "Sean", "Tom", "Harry"];
    makeGreat(magicianNames);
    showMagicians(magicianNames);
}
//Q43  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
{
    function makeGreat(magicians) {
        for (let i = 0; i < magicians.length; i++) {
            magicians[i] = "The Great " + magicians[i];
        }
        return magicians;
    }
    function showMagicians(magicians) {
        for (let i of magicians) {
            console.log(i);
        }
    }
    console.log('\n');
    const magicianNames = ["David", "Paul", "Sean", "Tom", "Harry"];
    let greatMagicianNames = makeGreat([...magicianNames]); // Create a copy of the original array
    console.log("Original Magician Names:");
    showMagicians(magicianNames);
    console.log("\nGreat Magician Names:");
    showMagicians(greatMagicianNames);
}
//Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
{
    console.log('\n');
    function makeSandwich(...items) {
        console.log("Making a sandwich with:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
        console.log("Sandwich is ready!\n");
    }
    makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
    makeSandwich("Chicken", "Cheese");
    makeSandwich("Beef", "Jalapeno", "Garlic Mayo");
}
//45  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
{
    function storeCarInfo(manufacturer, modelName, ...options) {
        const car = {
            manufacturer,
            modelName
        };
        for (const option of options) {
            Object.assign(car, option);
        }
        return car;
    }
    const carInfo = storeCarInfo("Toyota", "Camry", { color: "Blue", year: 2022 }, { sunroof: true });
    console.log(carInfo);
}
