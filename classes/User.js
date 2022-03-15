class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

module.exports = User;
