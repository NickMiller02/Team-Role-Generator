//Call the Employee class
const Employee = require('./Employee');

//Manager class extending from the Employee class
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        //Calls on Exployee's requirements and adds an Office Number
        super (name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum () {
        return this.officeNum;
    }
    getRole () {
        return "Manager";
    }
}

//Exports as Manager
module.exports = Manager;