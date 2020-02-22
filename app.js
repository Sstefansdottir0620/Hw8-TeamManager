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
var data = {
    manager:[],
    intern:[],
    engineer:[]
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
        name: "github",
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


function init() {
    inquirer.prompt(generalQuestions)
    .then(generalAnswers => {
        switch(generalAnswers.role) {
            case "Manager":
                inquirer.prompt(managerQuestions).then(managerAnswer => {
                    //Data storage here
                    var manager = new Manager(generalAnswers.id, generalAnswers.name, generalAnswers.email, managerAnswer.officeNumber);
                    data.manager.push(manager);
                    confirmAddrole();
                });
                break;
                case "Engineer":
                inquirer.prompt(engineerQuestions).then(engineerAnswer => {
                    //Data storage here
                    var engineer = new Engineer(generalAnswers.id, generalAnswers.name, generalAnswers.email, engineerAnswer.github);
                    data.engineer.push(engineer);
                    confirmAddrole();
                });
                break;
                case "Intern":
                inquirer.prompt(internQuestions).then(internAnswer => {
                    //Data storage here
                    var intern = new Intern(generalAnswers.id, generalAnswers.name, generalAnswers.email, internAnswer.school); 
                    data.intern.push(intern);
                    confirmAddrole();
                });
                break;
        }
       
    })
};
// An initial function is created to prompt 

function confirmAddrole(){
    console.log(data);
    inquirer.prompt({
        type:"list",
        name: "confirm",
        message: "Would you like to add an employee?",
        choices:["YES","NO"]
    }).then(response => {response.confirm
    if (response.confirm === "YES") {
        init();
    } else {
        console.log("ok goodbye!");   
    }
    })
};

init();

