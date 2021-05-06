const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern.js')


test('makes sure a school name is there', () => {
  let intern = new Intern();
  expect(intern.school).toBe('UW-Milwaukee')
})

test('make sure the role is intern', () => {
  let intern = new Intern();
  expect(intern.role).toBe('intern');
})