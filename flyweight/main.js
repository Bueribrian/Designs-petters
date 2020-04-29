class Courses {
  constructor(data) {
    this.flyweight = FlyWeights.get(data.author, data.completed);
    this.title = data.title;
  }
}

class FlyWeight {
  constructor(completed, author) {
    this.completed = completed;
    this.author = author;
  }
}

const FlyWeights = (() => {
  let flyWeights = {};

  const get = (user, completed) => {
    if (!flyWeights[user + completed]) {
      flyWeights[user + completed] = new FlyWeight(user, completed);
    }
    return flyWeights[user + completed];
  };

  const getCount = () => {
    let count = 0;
    for (f in flyWeights) count++;
    console.log(count);
    console.log(flyWeights);
  };

  return {
    get,
    getCount,
  };
})();

const CoursesMethods = function () {
  let courses = [];
  let coursesCount = 0;

  const add = (course) => {
    courses[course.title] = new Courses(course);
    coursesCount++;
  };
  const get = (title) => {
    console.log(courses[title]);
  };
  const getCount = () => {
    console.log(coursesCount);
  };
  const showCourses = () => {
    console.log(courses);
  };

  return {
    add,
    get,
    getCount,
    showCourses,
  };
};

let CoursesManagment = new CoursesMethods();

const authors = ["Martin", "Brian", "Carlos", "Josefina"];
const completedArray = [true, false];
const coursesCount = 10000;

const startMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < coursesCount; i++) {
  CoursesManagment.add({
    title: i + ".Course",
    author: authors[Math.round(Math.random() * (authors.length - 1))],
    completed:
      completedArray[Math.round(Math.random() * (completedArray.length - 1))],
  });
}
const endMemory = process.memoryUsage().heapUsed;
const resultMemory = ((endMemory - startMemory) / 1024 / 1024).toFixed(2);
const resultMemory2 = ((endMemory - startMemory) / 1000000).toFixed(2);
console.log(resultMemory, "\n", resultMemory2);

FlyWeights.getCount();
// CoursesManagment.getCount();
// CoursesManagment.showCourses();
// CoursesManagment.get("HTML");
