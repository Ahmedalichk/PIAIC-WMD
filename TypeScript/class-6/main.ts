#!/usr/bin/node env
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import boxen from 'boxen';
import { student } from "./student.js";



(async () => {
    await showBanner(`WELCOME ${student.firstName}`, 'In Class')
})();
console.log(showBanner);


// console.log(chalk.bgYellowBright.bold(student.name));