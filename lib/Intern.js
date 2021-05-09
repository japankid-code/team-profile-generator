const Employee = require('./Employee');

module.exports = class Intern extends Employee {
  constructor(school) {
    super(Employee);
    this.school = school
    this.role = 'Intern';
  }

  getSchool() {
    return this.school;
  }
  
  getRole() {
    return this.role;
  }
}
