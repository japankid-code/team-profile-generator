const Employee = require('./Employee');

class Manager extends Employee {
  constructor({ name, email, id, special }) {
    super({ name, email, id, special });
    this.special = special;
    this.role = 'Manager';
  }

  getOfficeNumber() {
    return this.special;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;