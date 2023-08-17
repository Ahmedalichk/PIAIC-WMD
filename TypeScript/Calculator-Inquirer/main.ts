import chalk from "chalk";
import showBanner from "node-banner";
import inquirer from "inquirer";
import add from "./add.js"
import sub from "./sub.js";
import mul from "./mul.js"
import div from "./div.js";
import Choices from "inquirer/lib/objects/choices.js";
import { error } from "console";



const cal = await inquirer.prompt([{
    name:"firstNum",
    type:"number",
    message:"Enter First Number:  "
},
{
    name:'secondNum',
    type:'number',
    message:'Enter Second Number: '
},
{
    name:'operator',
    type:'list',
    message:'Select the desired operator',
    choices:['Addition','Subtraction','Multiplication','Division']
}]);



switch(cal.operator){
    case 'Addition':
        console.log(chalk.greenBright.bold.underline(`${cal.firstNum} + ${cal.secondNum} : `,add(cal.firstNum, cal.secondNum)));
        break;
    case 'Subtraction':
        console.log(chalk.greenBright.bold.underline(`${cal.firstNum} - ${cal.secondNum} : `,sub(cal.firstNum, cal.secondNum)));
        break;
    case 'Multiplication':
        console.log(chalk.greenBright.bold.underline(`${cal.firstNum} x ${cal.secondNum} : `,mul(cal.firstNum, cal.secondNum)));
        break;
    case 'Division':
        {
            if(cal.secondNum !== 0){
                console.log(chalk.greenBright.bold.underline(`${cal.firstNum} / ${cal.secondNum} : `,div(cal.firstNum, cal.secondNum)));
            }
            else{
                throw new Error('Cannot Divide by 0')
            }
        }
        break;
}