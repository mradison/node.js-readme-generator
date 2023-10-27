function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  }
}

function renderLicenseLink(license) {
  if (license === 'N/A') {
    return ''
  } else {
    return license
  }
}

function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## License`
  } else {
    return ''
  }
}

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