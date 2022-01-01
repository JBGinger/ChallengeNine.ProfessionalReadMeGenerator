// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case 'Apache_2.0':
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/npm/l/starwars-names.svg?style=flat-square';
      break;
    case 'NPM':
      licenseBadge = 'https://img.shields.io/npm/v/16';
      break;
    case 'None':
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
    case 'Apache_2.0':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'MIT':
      licenseLink = 'https://www.mit.edu/~amini/LICENSE.md';
      break;
    case 'NPM':
      licenseLink = 'https://docs.npmjs.com/policies/npm-license';
      break;
    case 'None':
      licenseLink = 'None';
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection =
    `## License 
  Licensed under: ${data.license}  
  License Link: ${licenseLink}  
  ![alt text](${licenseBadge})
  `
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseSection = renderLicenseSection(data);

  let fileData =
    `# ${data.title}

## Description
${data.description}

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credit](#credit)
* [License](#license)

## Installation
Please enter the following command into the console to install the project dependancies: ${data.installation}

## Usage
${data.usage}

## Credit
Name: ${data.name}  
Github Profile: https://github.com/${data.github}

${licenseSection}
`;
  return fileData;
}

module.exports = { generateMarkdown };
