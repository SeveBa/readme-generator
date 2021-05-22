// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const generate = require('./utils/generateMarkdown.js');
generate.renderLicenseBadge("this is my license");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: "title",
    message: "What is title of your project?",
    validate: titleInput => {
      if (titleInput) {
        return true
      } else {
        console.log('Please enter the title of your project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: "description",
    message: "What is the description of your project?",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true
      } else {
        console.log('Please enter the description of your project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: "installation",
    message: "What are the installation instructions?",
    validate: installationInput => {
      if (installationInput) {
        return true
      } else {
        console.log('Please enter the installation instructions of your project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: "usageInformation",
    message: "What is the usage information?",
    validate: usageInput => {
      if (usageInput) {
        return true
      } else {
        console.log('Please enter the usage information of your project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: "contributionGuidelines",
    message: "What are the contribution guidelines?",
    validate: guidelinesInput => {
      if (guidelinesInput) {
        return true
      } else {
        console.log('Please enter the contribution guidelines of your project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: "testInstructions",
    message: "What are the test instructions?",
    validate: testInput => {
      if (testInput) {
        return true
      } else {
        console.log('Please enter the test instructions of your project!')
        return false
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName)
  fs.writeFileSync(fileName, data, function(err){
    return console.log(err)
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const readme = generate.generateMarkdown(answers)
        writeToFile('README.md', readme)
      })
}

// Function call to initialize app
init();
