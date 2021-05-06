module.exports = function() {
  this.name = 'jake';
  this.id = 234;
  this.email = 'me@email.com';
  this.role = 'engineer';
  this.github = 'japankid-code'
  this.getName = () => this.name;
  this.getId = () => this.id;
  this.getEmail = () => this.email;
  this.getRole = () => this.role;
  this.getGithub = () => this.github;
}