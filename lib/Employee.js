const inquirer = require('inquirer');

class Employee {
  constructor(data) {
    const { name, id, email } = data;
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;