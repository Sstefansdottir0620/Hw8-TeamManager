
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, email, githubURL){
       super(id, name, email) 
        this.githubURL = githubURL
        
    }


    getURL(){
        return this.githubURL;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer; 