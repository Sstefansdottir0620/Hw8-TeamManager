class Employee{
    constructor(id, name, title, email){
        this.id = id,
        this.name = name,
        this.title = title,
        this.email = email

        
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
    getRole() {
        return "Employee";
    }

}

module.exports = Employee; 