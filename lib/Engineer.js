const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
  constructor(github) {
    super(Employee);
    this.github = github;
    this.role = 'Engineer';
  }

  getGithub() {
    return this.github;
  }
  
  getRole() {
    return this.role;
  }
}
