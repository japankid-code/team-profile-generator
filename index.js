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
      const manager = new Manager(answers);
      console.log(manager)
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
        const engineer = new Engineer(answers.name, answers.email, answers.special);
        // push the new employee to the employees array
        employees.push(engineer);
      } else if (answers.role === 'Intern') {
        const intern = new Intern(answers.name, answers.email, answers.special);
        // push the new employee to the employees array
        employees.push(intern);
      } else if (answers.add) {
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
        writeFile(employeeList)
        console.log("Sample page opening in browser, have a wonderful day!")
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
  special: 'green'
},
{ 
  name: 'jake',
  role: 'Intern',
  id: 2,
  email: 'me@email.com',
  special: 'green'
},
{ 
  name: 'jake',
  role: 'Engineer',
  id: 3,
  email: 'me@email.com',
  special: 'green'
},
]


// after grabbing the data from the prompts, write to file in dist
const writeFile = (employees) => {
  console.log(employees)
  let htmlGen = HTMLtemplate(employees);
  fs.writeFile('./dist/index.html', htmlGen, () => '');
  console.log(`HTML file written in the dist/ directory.`);
  open(path.join(__dirname, './dist/index.html'))
}

teamMaker()