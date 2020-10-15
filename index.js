//Saying it needs to require the file in the index.js
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")

// array of questions for user Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
    type: "input", 
    message: "Whats Your Username?", 
    name: "github", 
    
    }, {
    type: "input",
    question: "What is your current email?",
    name: "email",
    }, 
    {
    type: "input",
    question: "What is the deployed Github Link?",
    name: "link",
    },
    {
    type:"input",
    question: "Please List a Table of Contents",
    name: "table",
    },
    {
    type:"input",
    question: "Please name any Installation Requirements",
    name: "install",
    },
    {
    type:"input",
    question: "Please Describe Your Repo/Project.",
    name:"describe"
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
