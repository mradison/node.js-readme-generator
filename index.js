const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

function startPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the title of your project?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is a brief description of your project? (What, why, how)',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps to required to install your project?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How would a user use your website?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license did you use?',
                choices: ['MIT', 'GPL', 'Apache License', 'GNU', 'N/A'],
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'contributors',
                message: 'Who else contributed to this project/website?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Are there any test instructions?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Are there any additonal comments that you would like to add?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
            {
                type: 'input',
                name: 'emailaddress',
                message: 'What is your email address?',
                validate: (value) => { if (value) { return true } else { return 'Please input a value to continue' } },
            },
        ])
        .then((data) => {
            const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;

            fs.writeFile(fileName, generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        })
}

function init() {
    startPrompts();
}

init();