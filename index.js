// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileGenerator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name.',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You must enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('You must enter a github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter a project name.',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('You must enter a project name!');
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
                    console.log('You must enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter a console installation command for your project dependancies.',
            validate: projectInstallation => {
                if (projectInstallation) {
                    return true;
                } else {
                    console.log('You must enter an installation command!');
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
                    console.log('You must enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please enter contribution guidelines for your project.',
            validate: projectContribution => {
                if (projectContribution) {
                    return true;
                } else {
                    console.log('You must enter contribution instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter test instructions for your project.',
            validate: testInstructions => {
                if (testInstructions) {
                    return true;
                } else {
                    console.log('You must enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a project license.',
            choices: ['Apache_2.0', 'MIT', 'NPM', 'None'],
            validate: projectLicense => {
                if (projectLicense) {
                    return true;
                } else {
                    console.log('You must select a project license! Please select "None" if your project does not have a license.');
                    return false;
                }
            }
        },
    ])
    .then((data) => {
        let fileData = fileGenerator.generateMarkdown(data);
        writeToFile('./dist/README.md', fileData);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, err => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log("README file created!")
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    questions();
};

// Function call to initialize app
init();
