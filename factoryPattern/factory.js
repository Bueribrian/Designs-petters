const Instructor = require("./Instructor");
const Student = require("./Student");

const userFactory = (
  user,
  name,
  position,
  earning,
  level = "Begginer",
  grade = "undefinded"
) => {
  if (user === "instructor") {
    return new Instructor(name, level, earning, grade);
  }

  if (user === "student") {
    return new Student(name, position, level);
  }
};

// module.exports = userFactory;

const User = userFactory("student", "Jake", "Entry", 3000);
console.log(User.getInfo());
