const Employee = require('../lib/Employee.js')

jest.mock('../lib/Employee.js')

test('check all required props are present', () => {
  const employee = new Employee();
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})

test('make sure all getters do the proper getting', () => {
  const employee = new Employee();
  expect(employee.getName()).toEqual('jake');
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual('me@email.com');
  expect(employee.getRole()).toEqual('employee');
})