#!/usr/bin/node env
import showBanner from "node-banner";
import { student } from "./student.js";
(async () => {
    await showBanner(`WELCOME ${student.firstName}`, 'In Class');
})();
console.log(showBanner);
// console.log(chalk.bgYellowBright.bold(student.name));
