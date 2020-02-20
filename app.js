const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML")
const writeFileAsync = util.promisify(fs.writeFile);


inquirer.prompt([

{
    type: "input",
    name: "nameManager",
    message: "Please insert the name of the manager",


    
}

])
