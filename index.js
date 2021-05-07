const HTMLtemplate = require('./src/HTML-template.js');
const fs = require('fs');

// inquirer prompts will go here, lets use a pre-defined object for now
const employee = { 
  name: 'jake',
  role: 'student',
  id: 1,
  email: 'me@email.com',
  special: 'green'
}
// after grabbing the data from the prompts, write to file in dist
const writeFile = () => {
  let htmlGen = HTMLtemplate(employee);
  fs.writeFile('./dist/index.html', htmlGen, () => '');
}

writeFile();