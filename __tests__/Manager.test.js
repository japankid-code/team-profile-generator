const Manager = require('../lib/Manager');

jest.mock('../lib/Manager.js')


test('makes sure an office number is there', () => {
  let manager = new Manager();
  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('make sure the role is manager', () => {
  let manager = new Manager();
  expect(manager.role).toBe('manager');
})