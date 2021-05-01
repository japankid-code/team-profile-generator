const Employee = require('../lib/Employee.js')

jest.mock('../lib/Employee.js')

test('check all required props are present', () => {
  const employee = new Employee();
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})

test('make sure all getters do the proper getting', () => {
  const employee = () => {
    this.name = 'jake';
    this.id = 234;
    this.email = 'me@email.com';
    this.role = 'admin';
    this.getName = () => this.name;
    this.getId = () => this.id;
    this.getEmail = () => this.email;
    this.getRole = () => this.role;
  }
  const mockEmployee = jest.fn(employee)
  expect(mockEmployee.getName()).toHaveReturnedWith("jake")
  expect(mockEmployee.getId()).toHaveReturnedWith(234)
  expect(mockEmployee.getEmail()).toHaveReturnedWith("me@email.com")
  expect(mockEmployee.getRole()).toHaveReturnedWith("employee")
})