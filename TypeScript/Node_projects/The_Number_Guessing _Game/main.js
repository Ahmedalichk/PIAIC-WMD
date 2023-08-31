#!/usr/bin/env node
import inquirer from 'inquirer';
import chalkAnimation from "chalk-animation";
// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function playGame() {
    let rounds = 0;
    let score = 0;
    let playAgain = true;
    //====================================
    async function welcome() {
        let title = chalkAnimation.rainbow('\tWelcome to the Guess the Number game!\n');
        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });
        title.stop();
    }
    await welcome();
    //==========================================
    while (playAgain) {
        rounds++;
        const targetNumber = generateRandomNumber(1, 100);
        let attempts = 0;
        console.log(`Round ${rounds}: Guess the number between 1 and 100.`);
        while (true) {
            const { guess } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'guess',
                    message: 'Enter your guess:',
                    validate: (input) => {
                        const number = parseInt(input, 10);
                        if (isNaN(number) || number < 1 || number > 100) {
                            return 'Please enter a valid number between 1 and 100.';
                        }
                        return true;
                    }
                }
            ]);
            const guessedNumber = parseInt(guess, 10);
            attempts++;
            if (guessedNumber === targetNumber) {
                console.log(`Congratulations! You guessed the number in ${attempts} attempts.\n`);
                score++;
                const { continuePlaying } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'continuePlaying',
                        message: 'Do you want to play another round?',
                        default: true
                    }
                ]);
                playAgain = continuePlaying;
                break;
            }
            else {
                console.log(guessedNumber < targetNumber ? 'Try a higher number.' : 'Try a lower number.');
            }
        }
    }
    console.log(`Game over. Your score: ${score} out of ${rounds} rounds.`);
}
playGame();
