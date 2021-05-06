const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer.js')


test('makes sure a github username is there', () => {
  let engineer = new Engineer();
  expect(engineer.github).toBe('japankid-code')
})

test('make sure the role is engineer', () => {
  let engineer = new Engineer();
  expect(engineer.role).toBe('engineer');
})