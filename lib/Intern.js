const Employee = require('./Employee');

module.exports = class Intern extends Employee {
  constructor({ name, email, id, special }) {
    super({ name, email, id, special });
    this.special = special;
    this.role = 'Intern';
  }

  getSchool() {
    return this.special;
  }
  
  getRole() {
    return this.role;
  }
}
