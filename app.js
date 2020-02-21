const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const jest = require("jest");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//File variables used to read in and write files
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Each item in the manager/intern/engineer array will be a new instance of a specific employee class.
var answers = {
    manger:[
        
    {id:"",
    name:"",
    email:"",
    officeNumber:""}
],
    intern:[
        
    {id:"",
    name:"",
    email:"",
    school:""},
],
    engineer:[
        
    {id:"",
    name:"",
    email:"",
    githubURL:""},
],

}

// A variable is set for the general questions that are prompted to the user.
let generalQuestions = [
    {
        type: "list",
        name: "role",
        message: "Please choose a type of employee:",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the ID of the employee:"
    },
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the employee:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the email of the employee:"
    }

]

// A variable is set for specific categories of questions that only pertain to certain roles.
let managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number of the manager:"
    }

]

let engineerQuestions = [
    {
        type: "input",
        name: "githubURL",
        message: "Please enter the gihub-URL of the engineer :"
    }

]

let internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Please enter the school-name of the intern :"
    }

]
// An initial function is created to promt the questions to user using inquirer.
function init() {
    inquirer.prompt(generalQuestions)
    .then(generalAnswers => {answer})
}

switch(generalAnswers.role) {
    case: "Manager"
        inquirer.prompt(managerQuestions);
        break;
        case: "Engineer"
        inquirer.prompt(engineerQuestions);
        break;
        case: "Intern"
        inquirer.prompt(internQuestions);
        break;
    
}