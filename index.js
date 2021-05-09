const HTMLtemplate = require('./src/HTML-template.js');
const fs = require('fs');
const inquirer = require('inquirer');
const open = require('open');
const path = require('path');

const Employee = require('./lib/Employee')
// const Engineer = require('lib/Engineer');
// const Intern = require('lib/Intern');
// const Manager = require('lib/Manager');

let employees = [];
// inquirer prompts will go here, will have to wrap them in a function
// the function will be used to pass employees to an array
const employeeAdder = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "what is the employee's name?"
      },
      {
        type: 'input',
        name: 'email',
        message: "what is the employee's email?",
      },
      {
        type: 'list',
        name: 'role',
        message: 'What role does this employee perform?',
        choices: ['Engineer', 'Manager', 'Intern']
      },
      {
        type: 'input',
        name: 'special',
        message: "what is the manager's office number?",
        when: (answers) => answers.role === 'Manager',
      },
      {
        type: 'input',
        name: 'special',
        message: "what is the engineer's github username?",
        when: (answers) => answers.role === 'Engineer',
      },
      {
        type: 'input',
        name: 'special',
        message: "what school does the intern attend?",
        when: (answers) => answers.role === 'Intern',
      },
      {
        type: 'confirm',
        name: 'add',
        message: 'Would you like to add another employee?',
        default: true,
      },
    ])
    .then(answers => {
      // push the new employee to the employees array
      employees.push(answers);
      if (answers.add) {
        employeeAdder();
      } else {
        writeFile(employees);
      }
    })
    .catch(err => {});
}

const promptStarterOld = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to add an employee?',
        default: true,
      },
    ])
    .then(answers => {
      if (answers.confirm === true) {
        employeeAdder();
      } else {
        writeFile(employeeList)
        console.log("Alright thank you have a wonderful day!")
      }
    })
    .catch(err => {});
}


// this prompt starter will eventually call new Manager() to begin prompting.
const promptStarterNew = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to create a new team page?',
        default: true,
      },
    ])
    .then(answers => {
      if (answers.confirm === true) {
        // manager should be called first 
        let teammate = new Employee();
        teammate.getName();
        employees.push(teammate);
      } else {
        writeFile(employeeList)
        console.log("Alright thank you have a wonderful day!")
      }
    })
    .catch(err => {});
}

// a pre-defined object for testing output
const employeeList = [
  { 
  name: 'jake',
  role: 'Manager',
  id: 1,
  email: 'me@email.com',
  special: '325'
},
{ 
  name: 'jake',
  role: 'Engineer',
  id: 1,
  email: 'me@email.com',
  special: 'japankid-code'
},
{ 
  name: 'jake',
  role: 'Engineer',
  id: 1,
  email: 'me@email.com',
  special: 'japankid-code'
},
{ 
  name: 'jake',
  role: 'Engineer',
  id: 1,
  email: 'me@email.com',
  special: 'japankid-code'
},
{ 
  name: 'jake',
  role: 'Intern',
  id: 1,
  email: 'me@email.com',
  special: 'UW Madison'
},
]


// after grabbing the data from the prompts, write to file in dist
const writeFile = (employees) => {
  let htmlGen = HTMLtemplate(employees);
  fs.writeFile('./dist/index.html', htmlGen, () => '');
  console.log(`HTML file written in the dist/ directory.`);
  open(path.join(__dirname, './dist/index.html'))
}

promptStarterNew();