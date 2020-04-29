const Person = require("./Person");

class Student extends Person {
  constructor(name, position, level) {
    super(name);
    this.position = position;
    this.level = level;
  }
}

module.exports = Student;
