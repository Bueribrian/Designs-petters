class Person {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    console.log(JSON.stringify(this));
  }
}

module.exports = Person;
