//Saying it needs to require the file in the index.js
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")

// array of questions for user Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
    type: "input", 
    name: "gitHub Profile", 
    question: "Whats Your Username?" 
    }, {
    type: "input",
    email: "Email",
    question: "What is your current email?"
    }, 
    {
    type: "input",
    link: "link",
    question: "What is the deployed Github Link?"
    },
    {
    type:"input",
    link: "text",
    question: "Please Describe your Repository/Project."
    }

];
console.log(questions);

//function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, function(err) {
        
    })
};

// function to initialize program
// function init() {
//     inquirer.prompt(questions).then() => {

//     }
// }

// function call to initialize program
init();
