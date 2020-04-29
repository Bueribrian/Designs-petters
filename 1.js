const courses = ["javascript", "nodejs", "css", "html", "bootstrap4"];

const coursesArray = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "nodejs" },
  { id: 3, name: "css" },
  { id: 4, name: "html" },
];

const numbers = [4, 4, 8, 16];

// ? FOREACH --------
// courses.forEach((course, indexCourse, courses) => {return console.log(courses)})
// ? FILTER ----------
// const courseSelected = coursesArray.filter((course) => course.name === "css");
// ? indexOF --------
// courses[courses.indexOf('css')]
// ? MAP
// courses.map(course => course.length)
// ? REDUCE
// console.log(numbers.reduce((accumuletor, number) => accumuletor + number, 0))
// ? FIND
// const courseName = coursesArray.find(course => course.name === 'Javascript')
// console.log(courseName)

// !OLD JAVASCRIPT
// const Course = function (name, author){
//     this.name = name
//     this.author = author

//     this.toString = function (){
//         return this.name + ' ...Author: ' + this.author
//     }
// }

// let course_1 = new Course('Bootstrap4', 'Brian')

// console.log(course_1.toString())

// ? NEW JAVASCRIPT
class CourseNew {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  toString() {
    return this.name + " ...author: " + this.author;
  }
}
// !PROTOTYPE
CourseNew.prototype.getName = function () {
  return this.name;
};

const newCourse = new CourseNew("Jake", "Paul");

console.log(newCourse.getName());

// !MODULE
