module.exports = class Employee {
  constructor({ name, email, id }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}
