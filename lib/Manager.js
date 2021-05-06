const Employee = require('Employee');

class Manager extends Employee {
  constructor(officeNumber) {
    super(Employee);
    this.officeNumber = officeNumber;
    this.role = 'manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
