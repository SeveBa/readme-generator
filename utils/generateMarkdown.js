// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = [
    {
      name: "Apache 2.0",
      badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
      url: "https://opensource.org/licenses/Apache-2.0",
    },
    {
      name: "Boost",
      badge: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
      url: "https://www.boost.org/LICENSE_1_0.txt",
    },
    {
      name: "BSD",
      badge: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
      url: "https://opensource.org/licenses/BSD-3-Clause",
    },
  ]

  for (i = 0; i < licenses.length; i++) {
    if (licenses[i].name === license) {
      return `[![License](${licenses[i].badge})](${licenses[i].url})`
    }
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = [
    {
      name: "Apache 2.0",
      badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
      url: "https://opensource.org/licenses/Apache-2.0",
    },
    {
      name: "Boost",
      badge: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
      url: "https://www.boost.org/LICENSE_1_0.txt",
    },
    {
      name: "BSD",
      badge: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
      url: "https://opensource.org/licenses/BSD-3-Clause",
    },
  ]

  for (i = 0; i < licenses.length; i++) {
    if (licenses[i].name === license) {
      return `[![License](${licenses[i].badge})](${licenses[i].url})`
    }
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `${renderLicenseBadge(answers.license)}
# ${answers.title}

## Description: 

${answers.description}

## Table of Contents
 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributors)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions?)


   
## Installation: 
    
${answers.installation}
  
## Usage: 
  
${answers.usageInformation} 

## Contributors: 
    
${answers.contributors}
  
## License:

${answers.license}

## Tests: 
    
${answers.testInstructions}

## Questions:
For questions, please find contact information below.  

Email: ${answers.email}

Github: [${answers.github}](https://github.com/${answers.github})
`;
}

module.exports = {
  renderLicenseBadge, 
  renderLicenseLink,
  generateMarkdown

}
