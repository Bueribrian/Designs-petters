const CourseBuilder = require("./courseBuilder");

let company_1 = new CourseBuilder("Apple", "Steve Jobs", 90000000)
  .setBankruptcy()
  .setEmployees(220000)
  .build();
company_1.toString();
let company_2 = new CourseBuilder("Microsoft", "Bill Gates", 13299523000)
  .setEmployees(520000)
  .build();
company_2.toString();
