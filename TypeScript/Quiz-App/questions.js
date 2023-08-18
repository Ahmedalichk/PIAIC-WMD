import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright(`\t\t Choose the correct answer of the following MCQ's`));
export let totalMarks = 5;
export let gainedMarks = 0;
export const MCQs = await inquirer.prompt([
    {
        name: 'Q1',
        type: "list",
        message: chalk.yellowBright("What is the largest mammal in the world?"),
        choices: ['a) Elephant',
            'b) Blue Whale',
            'c) Giraffe',
            'd) Lion']
    },
    {
        name: 'Q2',
        type: "list",
        message: chalk.yellowBright("Which mountain is the highest in the world?"),
        choices: ['a) Mount Kilimanjaro',
            'b) Mount McKinley',
            'c) Mount Everest',
            'd) Mount Fuji']
    },
    {
        name: 'Q3',
        type: "list",
        message: chalk.yellowBright("What is the largest organ in the human body?"),
        choices: ['a) Heart',
            'b) Liver',
            'c) Brain',
            'd) Skin']
    },
    {
        name: 'Q4',
        type: "list",
        message: chalk.yellowBright(`Who wrote the play "Romeo and Juliet"?`),
        choices: ['a) William Shakespeare',
            'b) Charles Dickens',
            'c) Mark Twain',
            'd) Jane Austen']
    },
    {
        name: 'Q5',
        type: "list",
        message: chalk.yellowBright("Which gas do plants use for photosynthesis?"),
        choices: ['a) Nitrogen',
            'b) Oxygen',
            'c) Carbon Dioxide',
            'd) Hydrogen']
    },
]);
if (MCQs.Q1 == 'b) Blue Whale') {
    console.log(chalk.greenBright.bold('Congrats! Your Q1 Answer is Correct'));
    gainedMarks = gainedMarks + 1;
}
else {
    console.log(chalk.red.bold(`You selected wrong option of Q1, Correct answer is b) Blue Whale`));
    gainedMarks;
}
if (MCQs.Q2 == 'c) Mount Everest') {
    console.log(chalk.greenBright.bold('Congrats! Your Q2 Answer is Correct'));
    gainedMarks = gainedMarks + 1;
}
else {
    console.log(chalk.red.bold(`You selected wrong option of Q2, Correct answer is c) Mount Everest`));
    gainedMarks;
}
if (MCQs.Q3 == 'd) Skin') {
    console.log(chalk.greenBright.bold('Congrats! Your Q3 Answer is Correct'));
    gainedMarks = gainedMarks + 1;
}
else {
    console.log(chalk.red.bold(`You selected wrong option of Q3, Correct answer is d)Skin`));
    gainedMarks;
}
if (MCQs.Q4 == 'a) William Shakespeare') {
    console.log(chalk.greenBright.bold('Congrats! Your Q4 Answer is Correct'));
    gainedMarks = gainedMarks + 1;
}
else {
    console.log(chalk.red.bold(`You selected wrong option of Q4, Correct answer is a) William Shakespeare`));
    gainedMarks;
}
if (MCQs.Q5 == 'c) Carbon Dioxide') {
    console.log(chalk.greenBright.bold('Congrats! Your Q5 Answer is Correct'));
    gainedMarks = gainedMarks + 1;
}
else {
    console.log(chalk.red.bold(`You selected wrong option of Q5, Correct answer is c) Carbon Dioxide`));
    gainedMarks;
}
