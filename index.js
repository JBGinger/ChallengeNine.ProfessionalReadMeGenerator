// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project.',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation command for your project.',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter an installation command!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions for your project.',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectLicense',
            message: 'Please enter your project license.',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a license!');
                    return false;
                }
            }
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 }

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(writeToFile('ReadMe.md', data));
 }

// Function call to initialize app
init();
