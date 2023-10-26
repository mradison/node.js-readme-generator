// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

function startPrompts(){
inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a brief description of your project? (What, why, how)',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to required to install your project?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How would a user use your website?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who else contributed to this project/website?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
        {
            type: 'input',
            name: 'comments',
            message: 'Are there any additonal comments that you would like to add?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to continue'}},
        },
    ])
    .then((data) =>{
        const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile(fileName,generateMarkdown(data),(err) =>
        err ? console.log(err) : console.log('Success!')
        );
    })
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeNewFile(path.join(process.cwd(), fileName), data)
// }

// TODO: Create a function to initialize app
function init() {
    // what  to do 
    startPrompts();
}

// Function call to initialize app
init();