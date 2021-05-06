const Employee = require('Employee');

class Intern extends Employee {
  constructor(school) {
    super(Employee);
    this.school = school
    this.role = 'intern';
  }

  getSchool() {
    return this.school;
  }
  
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
