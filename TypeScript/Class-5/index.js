// const promptSync = require('prompt-sync')();
import showBanner from "node-banner";
// let answers = await inquirer.prompt([   // ye func () leta hai list [] and list of obejects {}
//     {       ////// await is liye kio k ni pta k execute kb ho ga aur ye async function hai 
//         name:"firstName",    // variable name is userName
//         type:"input",
//         message:'enter your first name: ',
//     },
//     {
//         name:'lastName',
//         type:'input',
//         message:'enter your last name: '
//     },
//     {
//         name:'email',
//         type:'input',
//         message:'enter your email: '
//     },
//     {
//         name:'userAge',
//         type:'number',
//         message:'Enter Your Age: ',
//         validate: function(userAge:number){
//             if (userAge < 20){
//                 return 'user age should be greater than 20'
//             }
//             else{
//                 return true
//             }
//         }
//     },
//     {
//         name: 'contact',
//         type:'number',
//         message:'Enter you contact number: '
//     },
//     {
//         name: 'gender',
//         type:'list',     // list is like radiobox
//         message:'select the gender ',
//         choices:['male','female'],
//     },
//     {
//         name:'hobbies',
//         type:'checkbox',
//         message:'select you hobbies',
//         choices:['badminton','hockey','tennis','swimming','horse riding','football']
//     },
//     {
//         name:'confirmed',
//         type:'confirm',
//         message:'Select confirmed or not',
//     },
// ]);
// const showBanner = require('node-banner');
(async () => {
    await showBanner('The Database', 'This is a suitable tagline');
})();
console.log(showBanner);
// sum(2,4)
