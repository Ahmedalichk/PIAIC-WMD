import chalk from "chalk";
import showBanner from "node-banner";
import { gainedMarks, totalMarks } from "./questions.js";
// if(gainedMarks == totalMarks){
//     console.log(chalk.greenBright(`Congratulations! your all answers are correct, you gained ${gainedMarks} / ${totalMarks}`));
// }
// else if(gainedMarks >=3)
console.log(chalk.yellowBright.bold(`You gained ${gainedMarks} / ${totalMarks} marks`));
(async () => {
    await showBanner(`${gainedMarks} / ${totalMarks}`, `Your Gained Marks`);
})();
console.log(showBanner);
