const Course = require("./course");
const CourseGroup = require("./courseGroup");

let css = new Course("Css3", "Brian", 200);
let bootstrap4 = new Course("bootstrap4", "Brian", 100);
let javascript = new Course("Javascript", "Brian", 400);
let php = new Course("Php", "Brian", 300);

let WebDeveloper = new CourseGroup("Web developer courses", [
  css,
  bootstrap4,
  javascript,
  php,
]);

WebDeveloper.print();
console.log(`Total cost: $${WebDeveloper.getTotal()}`);
