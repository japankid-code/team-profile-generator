module.exports = function() {
  this.name = 'jake';
  this.id = 234;
  this.email = 'me@email.com';
  this.role = 'employee';
  this.getName = () => this.name;
  this.getId = () => this.id;
  this.getEmail = () => this.email;
  this.getRole = () => this.role;
}