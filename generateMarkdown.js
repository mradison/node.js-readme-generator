// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`; 
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return license
  } else if (license === 'N/A'){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A'){
    return `## License`
  }  else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title of Project: ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributors 
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  Here is a link to my GitHub profile: https://github.com/${data.github}

  Here is my email address if you have any questions about my project/website: ${data.emailaddress}
`;

}

module.exports = generateMarkdown;