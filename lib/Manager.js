const Employee = require('./Employee');

class Manager extends Employee {
  constructor({ name, email, special }) {
    super(name, email, special);
    this.officeNumber = special;
    this.role = 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;