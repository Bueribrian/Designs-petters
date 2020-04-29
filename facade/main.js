const { Course, CheckStatus } = require("./course");

let newcourse = new Course({
  name: "Bootstrap 4",
  author: "Brian Bueri",
  completed: true,
});

CheckStatus.completeMethod(newcourse);
