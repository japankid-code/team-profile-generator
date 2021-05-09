const inquirer = require('inquirer');

module.exports = class Employee {
  constructor() {this.id = null}

  getName() {
    if (this.name === undefined) {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
          },
        ])
        .then(answers => {
          this.name = answers.name;
        })
        .catch(err => {}); 
    } else {
      this.name = undefined;
      return;
    }

  }

  getId() {
    return this.id;
  }

  getEmail() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'email',
          message: "What is the employee's email?",
        },
      ])
      .then(answers => {
        return answers.email;
      })
      .catch(err => {});
  }

  getRole() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'role',
          message: "What is the employee's role?",
        },
      ])
      .then(answers => {
        return answers.role;
      })
      .catch(err => {});
  }
}
