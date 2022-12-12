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

//Create the team function

    //Create the manager

    //Create the engineer

    //Create the intern

//Create the HTML