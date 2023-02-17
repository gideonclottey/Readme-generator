const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please put your project description'
    },
    // Installation guide
        {
        type: 'input',
        name: 'Installation',
        message: 'What is the Installation guidelines ?'
    },
    // Usage
        {
        type: 'input',
        name: 'usage',
        message: 'What is the usage guidelines ?'
    },
    // License (multiple choice)
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', 'Bsd-2-Clause'],
        name: 'license',
        message: 'What is your project license type?'
    },
    // Contributing
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What is the contribution guidelines ?'
    },
    // Tests
        {
        type: 'input',
        name: 'test',
        message: 'What is the test guidelines ?'
    },
    // Questions
    {
        type: 'input',
        name: 'questions',
        message: 'What is the question guidelines ?'
    },
    // GitHub username
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const markdown = generateMarkdown(answers);
            console.log(markdown);
            writeToFile('README.md',markdown);
        });
}

// function call to initialize program
init();