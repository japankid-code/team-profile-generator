module.exports = function() {
  this.name = 'jake';
  this.id = 234;
  this.email = 'me@email.com';
  this.role = 'intern';
  this.school = 'UW-Milwaukee'
  this.getName = () => this.name;
  this.getId = () => this.id;
  this.getEmail = () => this.email;
  this.getRole = () => this.role;
  this.getSchool = () => this.school;
}