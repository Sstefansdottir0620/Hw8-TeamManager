class Manager extends Employee {
    constructor(id, name, title, email, officeNumber){
       super(id, name, title, email) 
        this.officeNumber = officeNumber
        
    }
    getName() {
        return this.name;
    }   
    getId() {
        return this.id;
    } 
    getEmail() {
        return this.email;
    } 
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Employee; 

}