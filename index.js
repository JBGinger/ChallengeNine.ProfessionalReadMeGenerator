// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileGenerator = require('./utils/generateMarkdown');

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
            validate: projectInstallation => {
                if (projectInstallation) {
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
            validate: projectUsage => {
                if (projectUsage) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a project license.',
            choices: ['MIT', 'Visual_Studio', 'Apache_2.0', 'GPL_3.0', 'None'],
            validate: projectLicense => {
                if (projectLicense) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            }
        },
    ])
    .then((data) => {
        let answerData = fileGenerator.generateMarkdown(data);
        writeToFile('README.md', answerData);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, answerData) {
    fs.writeFile(fileName, answerData, (err) => 
    err ? console.log(err) : console.log("README file created!"));
};

// TODO: Create a function to initialize app
function init() {
    questions();
};

// Function call to initialize app
init();
