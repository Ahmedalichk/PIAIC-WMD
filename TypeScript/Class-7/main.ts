#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { student } from "./student.js";



// (async () => {
//     await showBanner(`WELCOME ${student.firstName}`, 'In Class')
// })();
// console.log(showBanner);


interface cars{
    mileage : number,
    model : number
}
let lexus : cars ={
    mileage : 20000,
    model : 2023
}

function engineEfficiency (car : cars){
    let calculation = car.mileage * car.model;
    return calculation
}

engineEfficiency(lexus);

interface bikes {
    model : number,
    mileage : number
}

let h2r : bikes = {
    mileage : 2000,
    model : 2023
}

//nominal type structural type
//nominal me java c#, sirf name se concern hta hai
//structural typing me typescript, is me structure dekhta func wagera ki, properties match krta hai, left ki poori krta, COMPATABILITY

lexus = h2r

interface plane {
    mileage : number,
    model : number,
    speed : number
}

let jf17 : plane ={
    mileage:500,
    model: 2023,
    speed: 900
}

engineEfficiency(jf17)

lexus = jf17

// jf17 = lexus   speed ki property na hne ki waja se equal ni hai, // properties ko match krta hai, left ki poori krta, COMPATABILITY


interface bus {
    engine_mileage : number,
    model : number,
    mileage: string  // type chang hai ab b error func me 
}

let yukon : bus = {
    engine_mileage:500,
    model: 2023,
    mileage: 'too much'    // type chang hai ab b error func me 
}

//engineEfficiency(yukon) // func me mileage use hwa bus me engine_mileage hai

//variable structure
//property type
//property name

//=============================================================

let bmw = {model: 2022, mileage:2000, color: 'black'}  // fresh object me exact value hni chahye lkn 

lexus = {model: 2022, mileage:2000}  //fresh object pass ho ra lexus ko, see on right side

//STALE  OBJECT / old
lexus = bmw   // Stale object, additional properties ignore ho jati, minimum reqs fulfil hni chahye
// yahan pe same properties dekh k assign kr deta hai aur baki skip kr deta hai

//lexus = {model: 2022, mileage:2000, color: 'black'} // is pe error , kio k yahan frsh asign kr ra skip krne ka sene he ni hai

//bmw = lexus  // bmw ki properties fulfil ni kr ra kio k 

// TS me properties full match krni chahye, additional properties ignore ho jati

let merc : cars = {model : 2023, mileage : 2000}  // Right side pe dekhna bs, new object to Fresh

var x : {id : number, [x : string] : any}  // [x:string] ys variable name b string hna chahye
// [x : string]  key / name


x = {id : 12, address : 'Ali'}
let y = {id : 500, address : 'ISB'}
let z = {id : 500, area : 500}

x = y

x = z

// y = z  // error kio k y me address hai aur z me area hai

x = z

// y = x   // kio k y me address string hai aur x me os ki value any hai to null ya undefined b koi kr skta hai, is liye x=y but y!=x

//========================= any
let myval : any

myval.toLowerCase()   // any me chal jaye ga 

//============================ unknown
let value : unknown

if(typeof value === "string"){
    value.toLowerCase()   // narrowing    pehle narrow down kro
}

//=========================== never
function error(message: string):never{   // koi cheze return ni ho gi sirf exception throw ho jaye gi bs
    
    console.log('hello hi');
    console.log('hello hi');
    console.log('hello hi');   // apni functionality poori kr le phr throw 
    
    throw new Error(message)
}


//==========================================


// Task 1: Modeling Online Store Entities
// You're building a TypeScript application for an online store. Define the following types and interfaces:
// 1. Define an interface Product with properties like id, name, price, and category.
// 2. Create a type Cart that represents an array of Product objects.
// 3. Define an interface Customer with properties like id, name, and email.
// 4. Create a type Order that represents an object containing a Customer and a Cart.
// Implement a function that calculates the total price of products in the cart.

{

interface Product {
    id : number,
    name : string,
    price : number,
    category : string
}

type Cart = Product[];

// let Cart : Product = {
//     id : 20,
//     name : 'lays chips',
//     price : 500,
//     category : 'eatables'
// }

interface Customer {
    id : number,
    name : string,
    email : string
}

type Order = {
    customer : Customer;
    cart : Cart;

}

// let order: Customer  = {
//     id : 10,
//     name : 'Ali',
//     email : 'abc@gmail.com',
// }


function price_of_products(cart : Cart){
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return totalPrice
}

const products: Cart = [
    { id: 1, name: "Product 1", price: 10, category: "Category A" },
    { id: 2, name: "Product 2", price: 20, category: "Category B" },
    { id: 3, name: "Product 3", price: 15, category: "Category A" },
  ];
  
  const customer: Customer = { id: 1, name: "John Doe", email: "john@example.com" };
  
  const order: Order = { customer, cart: products };
  
  const totalPrice = price_of_products(order.cart);
  console.log("Total Price:", totalPrice);

}

{

    

interface Product {
  id:number,
  name:string,
  price:number,
  category:string,
  }
  
  type Cart = Product[]
  
  
  let cart:Cart =[
      {
    id:123,
      name:"Microphone",
      price:500,
      category:"Electronics",
  },
      {
    id:456,
      name:"Headphone",
      price:700,
      category:"Electronics",
  },
      {
    id:789,
      name:"Speakers",
      price:1350,
      category:"Electronics",
  },
  
  ];
  
  
  
  interface Customer {
      id:number,
      name:string,
      email:string,
  }
  
  type Order = {
      customer: Customer,
      cart: Cart,
  }
  
  function totalPrice(cart:Cart) {
  
  let sum: number = 0;
      for (let i of cart){
  sum += i.price;
  console.log(`The price for the ${i.name} in cart is : ${i.price}`);
      }
    
  console.log(`Total price for the products in cart is : ${sum}`);
      return sum;
  }
  
  totalPrice(cart);
  
  
  

}

//============================================================================================


// Task 2: Building a Blog System
// Imagine you're developing a TypeScript application for a blogging platform. Create the following types and interfaces:
// Define an interface Author with properties like id, name, and bio.
// Create a type Comment that represents an object with author (of type Author), content, and timestamp.
// Define an interface Post with properties like id, title, content, author (of type Author), and an array of Comments.
// Implement a function that sorts posts based on their number of comments.

{
interface Author {
    id : number,
    name : string,
    bio : string
}

type Comment = {
    author : Author,
    content : string,
    timestamp : Date
}

interface Post {
    id : number | string,
    title : string,
    content : string,
    author : Author,
    comments : Comment[]
}

function sortPostsByCommentCount(posts: Post[]): Post[] {
    return posts.slice().sort((postA, postB) => postB.comments.length - postA.comments.length);
  }
  
const author1: Author = { id: 1, name: "John Doe", bio: "An avid writer." };
const author2: Author = { id: 2, name: "Jane Smith", bio: "Passionate about stories." };

const post1: Post = {
  id: 1,
  title: "Introduction to TypeScript",
  content: "TypeScript is a superset of JavaScript...",
  author: author1,
  comments: [
    { author: author2, content: "Great article!", timestamp: new Date() },
    { author: author1, content: "Thank you!", timestamp: new Date() },
  ],
};

const post2: Post = {
  id: 2,
  title: "The Art of Writing",
  content: "Writing is a creative process...",
  author: author2,
  comments: [
    { author: author1, content: "I couldn't agree more.", timestamp: new Date() },
  ],
};

const posts: Post[] = [post1, post2];

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
interface Profile {
    id : number,
    username : string,
    bio : string,
    posts : Post[]
}

type Like = {
    user : User,
    timestamp : Date
}

interface Comment {
    id : number,
    user : User,
    content : string,
    timestamp : Date
}

interface User {
    id: number;
    username: string;
  }
  
  interface Post {
    id: number;
    user: User;
    content: string;
    timestamp: Date;
    likes: Like[];
    comments: Comment[];
  }
  

  function findMostLikedPost(profiles: Profile[]): { post: Post | null; user: User | null } {
    let mostLikedPost: Post | null = null;
    let mostLikes = 0;
    let mostLikedUser: User | null = null;
  
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
  const user1: User = { id: 1, username: "user1" };
  const user2: User = { id: 2, username: "user2" };
  
  const post1: Post = {
    id: 1,
    user: user1,
    content: "Awesome post!",
    timestamp: new Date(),
    likes: [{ user: user2, timestamp: new Date() }],
    comments: [],
  };
  
  const post2: Post = {
    id: 2,
    user: user2,
    content: "Great content!",
    timestamp: new Date(),
    likes: [{ user: user1, timestamp: new Date() }, { user: user2, timestamp: new Date() }],
    comments: [],
  };
  
  const profile1: Profile = { id: 1, username: "profile1", bio: "Hello world", posts: [post1] };
  const profile2: Profile = { id: 2, username: "profile2", bio: "Hi there", posts: [post2] };
  
  const profiles: Profile[] = [profile1, profile2];
  
  const mostLikedInfo = findMostLikedPost(profiles);
  console.log("Most Liked Post:", mostLikedInfo.post);
  console.log("Posted by:", mostLikedInfo.user);


}