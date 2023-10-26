// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(license === MIT){
//     ruturn [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT); 
//   } else if(license === GPL ) {
//     return [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0);
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A'){
    return `## License
    
    - no license used
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A'){
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Table of Contents
     - [Description](#description)
     - [Installation](#innstallation)
     - [Instructions](#instructions)
     - [Contributors](#contributors)
     - [License](#license)
     - [Comments](#comments)
     
  ##<a name="description"></a> Description 
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Instructions 
  ${data.instructions}

  ## Contributors 
  ${data.contributors}

  ##<a name="description"></a> Comments
  ${data.comments}
`;

}

module.exports = generateMarkdown;