class Course {
  constructor(data) {
    this.name = data.name;
    this.author = data.author;
    this.completed = data.completed || false;
  }
}

const CourseStatusManagment = (() => {
  return {
    completed: (course) => {
      course.completed = true;
    },
    save: (course) => {
      console.log(
        "Course Complete! Congratulations for complete => " + course.name
      );
    },
  };
})();

const CheckStatus = (() => {
  const complete = (course) => {
    if (course.completed) {
      CourseStatusManagment.save(course);
    } else {
      console.log("Keep going, you can do it!!! ✊✊");
    }
  };
  return {
    completeMethod: complete,
  };
})();

module.exports = { Course, CourseStatusManagment, CheckStatus };
