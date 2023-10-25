// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'No License'],
    },
    // Add more questions as needed for other sections of the README
  ];
  

// TODO: Create a function To write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('README.md generated successfully.');
      }
    });
  }
  

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers); // assuming you have a generateMarkdown function
  
      writeToFile('README.md', readmeContent);
    });
  }
  
// Function call to initialize app
init();