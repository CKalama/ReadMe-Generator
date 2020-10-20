//Saying it needs to require the file in the index.js
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")

// function to initialize program
function init() {
    inquirer.prompt ([
        {
            message: "Please Type the Name of This Repo",
            type:"input",
            name:"repoName"
        },
        {
            message:"Please give a detailed description of your Repo...",
            type:"input",
            name:"description"
        },
        {
            message:"Please Label Your Table of Contents...",
            type:"input",
            name:"table"
        },
        {
            message:"Please label any additional installatons",
            type:"input",
            name:"install"
        },
        {
            message:"Please Describe How to Use Your Repo",
            type:"input",
            name:"usage"
        },
        {
            message:"Please label any Additional Licenses",
            type:"input",
            name:"licenses"   
        },
        {
            message:"Please Name any Contributing Partners",
            type:"input",
            name:"contributors"
        },
        {
            message:"Please Describe How to Test Your Repo",
            type:"input",
            name:"test"
        },
        {
            message:"Please label Additional Team Notes and Common FAQ",
            type:"input",
            name:"questions"
        }
     


    ]).then(({repoName, description, table, install, usage, licenses, contributors,test,questions}) => {
        console.log(repoName, description, table, install, usage, licenses, contributors,test,questions);

        fs.writeFile("log.md", generateMarkdown({repoName, description, table, install, usage, licenses, contributors,test,questions}), function(err) {
            if (err) console.log(err)
            console.log("success!");
        })

    })
}

init();

// function call to initialize program
//init();



