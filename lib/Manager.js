const Employee = require('./Employee.js')

class Manager extends Employee {

 constructor(name, id, email, officeNumber) {
  super(name, id, email);
  this.officeNumber;
 }

 getRole() {
  return "Manager";
 }

 getOfficeNumber() {
  return this.officeNumber = officeNumber;
 }
}

module.exports = Manager