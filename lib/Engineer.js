const Employee = require('Employee');

class Engineer extends Employee {
  constructor(github) {
    super(Employee);
    this.github = github;
    this.role = 'engineer';
  }

  getGithub() {
    return this.github;
  }
  
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
