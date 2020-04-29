class CourseGroup {
  constructor(title, group = []) {
    this.title = title;
    this.group = group;
  }

  getTotal() {
    let total = this.group.reduce((sum, nextItem) => {
      return (sum = sum + nextItem.price);
    }, 0);
    return total;
  }

  printCourse() {
    this.group.forEach((course) => {
      course.print();
    });
  }

  print() {
    console.log(`----------- ${this.title} -----------`);
    this.printCourse();
    console.log(`-------------------------------------`);
  }
}

module.exports = CourseGroup;
