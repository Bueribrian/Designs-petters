const Course = require("./course");

class CourseBuilder {
  constructor(name, ceo, cotization) {
    this.name = name;
    this.ceo = ceo;
    this.cotization = cotization;
  }

  setBankruptcy() {
    this.bankruptcy = true;
    return this;
  }

  setEmployees(employees = 0) {
    this.employees = employees;
    return this;
  }

  build() {
    return new Course(this);
  }
}

module.exports = CourseBuilder;
