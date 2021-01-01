// Javascript file

// Declaring packages needed
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// Declaring questions variable object
const questions = 
[
    {
        type: "input",
        message: "Enter your Github username",    
        name: "username" 
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the title of your project",    
        name: "title" 
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Explain how a user would install this project",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide instructions and examples for use",
        name: "usage"
    },
    
    {
        type: "input",
        message: "Please list all contributors of this project",
        name: "contributors"
    },
    {
        type: "input",
        message: "Please enter any test instructions",
        name: "tests"
    },
];

// Inquirer code - do not touch
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        get(queryUrl).then(function(response) {
            
            const githubInfo = {
                githubImage: response.data.avatar_url,
                profile: response.data.html_url,
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

function init() 
{

}

init();