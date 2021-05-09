const HTMLtemplate = require('./src/HTML-template.js');
const fs = require('fs');
const inquirer = require('inquirer');
const open = require('open');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employees = [];
// first employee prompt for manager of the team
const addManager = () => {
  inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: "what is the Manager's name?"
        },
        {
          type: 'input',
          name: 'email',
          message: "what is the manager's email?",
        },
        {
          type: 'input',
          name: 'special',
          message: "what is the manager's office number?",
        },
        {
          type: 'confirm',
          name: 'add',
          message: 'Would you like to add employees?',
          default: true,
        },
    ])
    .then(answers => {
      answers.id = employees.length + 1;
      const manager = new Manager(answers);
      // push the new employee to the employees array
      employees.push(manager);
      if (answers.add) {
        employeeAdder();
      } else {
        writeFile(employees);
      }
    })
    .catch(err => {});
}

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
        choices: ['Engineer', 'Intern']
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
      if (answers.role === 'Engineer') {
        answers.id = employees.length + 1;
        const engineer = new Engineer(answers);
        // push the new employee to the employees array
        employees.push(engineer);
      } else if (answers.role === 'Intern') {
        answers.id = employees.length + 1;
        const intern = new Intern(answers);
        employees.push(intern);
      }
      if (answers.add) {
        employeeAdder();
      } else {
        writeFile(employees);
      }
    })
    .catch(err => {});
}


const teamMaker = ()=> {
  inquirer
    .prompt([
      // questions go here
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to begin creating a team page?',
        default: true,
      },
    ])
    .then(answers => {
      if (answers.confirm === true) {
        addManager();
      } else {
        console.log("Well, shoot.")
        return;
      }
    })
    .catch(err => {});

}

// after grabbing the data from the prompts, write to file in dist
const writeFile = (employees) => {
  let htmlGen = HTMLtemplate(employees);
  fs.writeFile('./dist/index.html', htmlGen, () => '');
  console.log(`File written to ${__dirname}\\dist\\index.html`);
  open(path.join(__dirname, './dist/index.html'))
}

teamMaker()