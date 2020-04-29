const petDb = require("./petDb");

class Pet {
  constructor(race, color, age) {
    this.race = race;
    this.color = color;
    this.age = age;
  }

  getInfo() {
    petDb.petInfo(this);
  }
}

module.exports = Pet;
