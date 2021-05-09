const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
  constructor({ name, email, id, special }) {
    super({ name, email, id, special });
    this.special = special;
    this.role = 'Engineer';
  }

  getGithub() {
    return this.special;
  }
  
  getRole() {
    return this.role;
  }
}
