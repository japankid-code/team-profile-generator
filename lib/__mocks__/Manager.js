module.exports = function() {
  this.name = 'jake';
  this.id = 234;
  this.email = 'me@email.com';
  this.role = 'manager';
  this.officeNumber = 100;
  this.getName = () => this.name;
  this.getId = () => this.id;
  this.getEmail = () => this.email;
  this.getRole = () => this.role;
}