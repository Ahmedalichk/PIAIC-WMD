#!/usr/bin/env node
let lexus = {
    mileage: 20000,
    model: 2023
};
function engineEfficiency(car) {
    let calculation = car.mileage * car.model;
    return calculation;
}
engineEfficiency(lexus);
let h2r = {
    mileage: 2000,
    model: 2023
};
//nominal type structural type
//nominal me java c#, sirf name se concern hta hai
//structural typing me typescript, is me structure dekhta func wagera ki, properties match krta hai, left ki poori krta, COMPATABILITY
lexus = h2r;
let jf17 = {
    mileage: 500,
    model: 2023,
    speed: 900
};
engineEfficiency(jf17);
lexus = jf17;
let yukon = {
    engine_mileage: 500,
    model: 2023,
    mileage: 'too much' // type chang hai ab b error func me 
};
//engineEfficiency(yukon) // func me mileage use hwa bus me engine_mileage hai
//variable structure
//property type
//property name
//=============================================================
let bmw = { model: 2022, mileage: 2000, color: 'black' }; // fresh object me exact value hni chahye lkn 
lexus = { model: 2022, mileage: 2000 }; //fresh object pass ho ra lexus ko, see on right side
//STALE  OBJECT / old
lexus = bmw; // Stale object, additional properties ignore ho jati, minimum reqs fulfil hni chahye
// yahan pe same properties dekh k assign kr deta hai aur baki skip kr deta hai
//lexus = {model: 2022, mileage:2000, color: 'black'} // is pe error , kio k yahan frsh asign kr ra skip krne ka sene he ni hai
//bmw = lexus  // bmw ki properties fulfil ni kr ra kio k 
// TS me properties full match krni chahye, additional properties ignore ho jati
let merc = { model: 2023, mileage: 2000 }; // Right side pe dekhna bs, new object to Fresh
var x; // [x:string] ys variable name b string hna chahye
// [x : string]  key / name
x = { id: 12, address: 'Ali' };
let y = { id: 500, address: 'ISB' };
let z = { id: 500, area: 500 };
x = y;
x = z;
// y = z  // error kio k y me address hai aur z me area hai
x = z;
// y = x   // kio k y me address string hai aur x me os ki value any hai to null ya undefined b koi kr skta hai, is liye x=y but y!=x
//========================= any
let myval;
myval.toLowerCase(); // any me chal jaye ga 
//============================ unknown
let value;
if (typeof value === "string") {
    value.toLowerCase(); // narrowing    pehle narrow down kro
}
//=========================== never
function error(message) {
    console.log('hello hi');
    console.log('hello hi');
    console.log('hello hi'); // apni functionality poori kr le phr throw 
    throw new Error(message);
}
// let order: Customer  = {
//     id : 10,
//     name : 'Ali',
//     email : 'abc@gmail.com',
// }
function price_of_products(cart) {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return totalPrice;
}
const products = [
    { id: 1, name: "Product 1", price: 10, category: "Category A" },
    { id: 2, name: "Product 2", price: 20, category: "Category B" },
    { id: 3, name: "Product 3", price: 15, category: "Category A" },
];
const customer = { id: 1, name: "John Doe", email: "john@example.com" };
const order = { customer, cart: products };
const totalPrice = price_of_products(order.cart);
console.log("Total Price:", totalPrice);
//============================================================================================
// Task 2: Building a Blog System
// Imagine you're developing a TypeScript application for a blogging platform. Create the following types and interfaces:
// Define an interface Author with properties like id, name, and bio.
// Create a type Comment that represents an object with author (of type Author), content, and timestamp.
// Define an interface Post with properties like id, title, content, author (of type Author), and an array of Comments.
// Implement a function that sorts posts based on their number of comments.
{
    function sortPostsByCommentCount(posts) {
        return posts.slice().sort((postA, postB) => postB.comments.length - postA.comments.length);
    }
    const author1 = { id: 1, name: "John Doe", bio: "An avid writer." };
    const author2 = { id: 2, name: "Jane Smith", bio: "Passionate about stories." };
    const post1 = {
        id: 1,
        title: "Introduction to TypeScript",
        content: "TypeScript is a superset of JavaScript...",
        author: author1,
        comments: [
            { author: author2, content: "Great article!", timestamp: new Date() },
            { author: author1, content: "Thank you!", timestamp: new Date() },
        ],
    };
    const post2 = {
        id: 2,
        title: "The Art of Writing",
        content: "Writing is a creative process...",
        author: author2,
        comments: [
            { author: author1, content: "I couldn't agree more.", timestamp: new Date() },
        ],
    };
    const posts = [post1, post2];
    const sortedPosts = sortPostsByCommentCount(posts);
    console.log(sortedPosts);
}
//==============================================================================
// Task 3: Social Media Platform
// Develop a TypeScript application for a social media platform. Define the following types and interfaces:
// Define an interface Profile with properties like id, username, bio, and an array of Posts.
// Create a type Like that represents an object with user (of type User) and timestamp.
// Define an interface Comment with properties like id, user (of type User), content, and timestamp.
// Implement a function that finds the most liked post and the user who posted it
{
    function findMostLikedPost(profiles) {
        let mostLikedPost = null;
        let mostLikes = 0;
        let mostLikedUser = null;
        for (const profile of profiles) {
            for (const post of profile.posts) {
                if (post.likes.length > mostLikes) {
                    mostLikes = post.likes.length;
                    mostLikedPost = post;
                    mostLikedUser = post.user;
                }
            }
        }
        return { post: mostLikedPost, user: mostLikedUser };
    }
    // Example usage
    const user1 = { id: 1, username: "user1" };
    const user2 = { id: 2, username: "user2" };
    const post1 = {
        id: 1,
        user: user1,
        content: "Awesome post!",
        timestamp: new Date(),
        likes: [{ user: user2, timestamp: new Date() }],
        comments: [],
    };
    const post2 = {
        id: 2,
        user: user2,
        content: "Great content!",
        timestamp: new Date(),
        likes: [{ user: user1, timestamp: new Date() }, { user: user2, timestamp: new Date() }],
        comments: [],
    };
    const profile1 = { id: 1, username: "profile1", bio: "Hello world", posts: [post1] };
    const profile2 = { id: 2, username: "profile2", bio: "Hi there", posts: [post2] };
    const profiles = [profile1, profile2];
    const mostLikedInfo = findMostLikedPost(profiles);
    console.log("Most Liked Post:", mostLikedInfo.post);
    console.log("Posted by:", mostLikedInfo.user);
}
export {};
