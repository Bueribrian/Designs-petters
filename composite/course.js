class Course {
  constructor(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
  }

  total() {
    return this.price;
  }
  print() {
    console.log(`- ${this.name} - $${this.price}`);
  }
}

module.exports = Course;
