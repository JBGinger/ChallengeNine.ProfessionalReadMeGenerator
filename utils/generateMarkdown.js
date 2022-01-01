// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case 'Apache_2.0':
      licenseBadge = '(/utils/license_badges/apache.png)';
      break;
    case 'NPM':
      licenseBadge = '(/utils/license_badges/npm.png)';
      break;
    case 'Visual_Studio_Code':
      licenseBadge = '(/utils/license_badges/visualstudiocode.png)';
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
    case 'NPM':
      licenseLink = 'https://docs.npmjs.com/policies/npm-license';
      break;
    case 'Visual_Studio_Code':
      licenseLink = 'https://code.visualstudio.com/license';
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
  ![] ${licenseBadge}
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
