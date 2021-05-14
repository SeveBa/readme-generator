// TODO: Include packages needed for this application

const inquirer = require("inquirer");



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: "title",
    message: "What is title of your project?",
  },
  {
    type: 'input',
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: 'input',
    name: "installation",
    message: "What are the installation instructions?",
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
      });
}

// Function call to initialize app
init();
