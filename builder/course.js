class Course {
  constructor(builder) {
    this.name = builder.name;
    this.ceo = builder.ceo;
    this.cotization = builder.cotization;
    this.bankruptcy = builder.bankruptcy;
    this.employees = builder.employees;
  }

  toString() {
    console.log(JSON.stringify(this));
  }
}

module.exports = Course;
