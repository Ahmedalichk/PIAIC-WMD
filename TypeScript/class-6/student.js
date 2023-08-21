import inquirer from "inquirer";
export let student = await inquirer.prompt([
    {
        name: 'firstName',
        type: 'input',
        message: 'enter your first name: '
    },
    {
        name: 'lastName',
        type: 'input',
        message: 'enter your last name: '
    },
    {
        name: 'email',
        type: 'input',
        message: 'enter your email: '
    },
    {
        name: 'gender',
        type: 'list',
        message: 'select the gender ',
        choices: ['male', 'female'],
    },
    {
        name: 'hobbies',
        type: 'checkbox',
        message: 'select you hobbies',
        choices: ['badminton', 'hockey', 'tennis', 'swimming', 'horseriding', 'football']
    }
]);
