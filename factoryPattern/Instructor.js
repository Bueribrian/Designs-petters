const Person = require("./Person");

class Instructor extends Person {
  constructor(name, level, earning, grade) {
    super(name);
    (this.level = level), (this.earning = earning), (this.grade = grade);
  }
}

module.exports = Instructor;
