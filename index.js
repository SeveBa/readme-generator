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
    type: 'list',
    name: 'license',
    message: 'Please provide your license:',
    choices: ['Apache 2.0', 'Boost', 'BSD'],
    validate: licenseInput => {
        if (licenseInput) {
            return true
        } else {
            console.log('Please enter License info!')
            return false
        }
    }
  },
  {
    type: 'input',
    name: "contributors",
    message: "Who contributed to this project?",
    validate: contributorsInput => {
      if (contributorsInput) {
        return true
      } else {
        console.log('Please enter contributors!')
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
  // {
  //   type: 'input',
  //   name: 'questions',
  //   message: 'Do you have any additional questions?',
  //   validate: questionsInput => {
  //       if (questionsInput) {
  //           return true
  //       } else {
  //           console.log('Please enter any Question you may have.')
  //           return false
  //       }
  //   }
  // },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your e-mail.',
    validate: questionsInput => {
        if (questionsInput) {
            return true
        } else {
            console.log('Please enter your e-mail.')
            return false
        }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your Github username.',
    validate: questionsInput => {
        if (questionsInput) {
            return true
        } else {
            console.log('Please enter your Github information.')
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
