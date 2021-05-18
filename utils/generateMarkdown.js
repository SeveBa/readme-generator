// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("uuuhhh what?")
  console.log(license)
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
## Table of Contents
  - ### Description: ${answers.description}
  - ### Installation: ${answers.installation}
  - ### Usage Information: ${answers.usageInformation}
  - ### Contribution Guidelines: ${answers.contributionGuidelines}
  - ### Test Instructions: ${answers.testInstructions}

`;
}

module.exports = {
  renderLicenseBadge, 
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown

}
