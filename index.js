//Pulling outside variables
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//Setting HTML output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, 'team.html');

//Getting Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

//Array for team
teamArr = [];

function runApp() {
    //Create the team function
    function createTeam() {
        inquirer.createPromptModule([{
            type: "list",
            name: "employeePrompt",
            message: "Which type of employye would you like to add to your roster?",
            choices: ['Manager', "Engineer", "Intern", "No more members are needed"]
        }]).then(function (userInput) {
            switch(userInput.employeePrompt) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    createHTML();
            }
        });

        //Create the manager
        function createManager() {
            inquirer.prompt ([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the name?"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the employee's ID number?"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the employee's email?"
                },
                {
                    type: "input",
                    name: "managerOfficeNum",
                    message: "What is the employee's office number?"
                },
            ]).then(response => {
                const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);
                teamArr.push(manager);
                createTeam();
            });
        }
        //Create the engineer
        function createEngineer() {
            inquirer.prompt ([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the name?"
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the employee's ID number?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the employee's email?"
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the employee's Github username?"
                },
            ]).then(response => {
                const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                teamArr.push(engineer);
                createTeam();
            });
        }
        //Create the intern
        function createIntern() {
            inquirer.prompt ([
                {
                    type: "input",
                    name: "internName",
                    message: "What is the name?"
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is the intern's ID number?"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is the intern's email?"
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "At which school does the intern attend?"
                },
            ]).then(response => {
                const intern = new Engineer(response.internName, response.internId, response.internEmail, response.internSchool);
                teamArr.push(intern);
                createTeam();
            });
        }
    }
}
//Create the HTML
function createHTML() {
    console.log('You created your roster!');
    fs.writeFileSync(outputPath, generateTeam(teamArr), "utf-8")
}

runApp();