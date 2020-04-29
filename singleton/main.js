const Singleton = (function () {
  let course;

  const assignCourse = () => {
    const course = new Object("Javascript");
    return course;
  };

  return {
    getInstance: () => {
      if (!course) course = assignCourse;
      return course;
    },
  };
})();

let firstInstance = Singleton.getInstance();
let secondInstance = Singleton.getInstance();

if (firstInstance === secondInstance) {
  console.log("Es igual");
}

const Singleton2 = (function () {
  let obj;

  const assingObject = function () {
    let obj = new Object("Javascript");
  };

  return {
    getInstance: () => {
      if (!obj) obj = assingObject();
      return obj;
    },
  };
})();

let newSingleton2 = Singleton2.getInstance();
let newSingleton2_2 = Singleton2.getInstance();

if (newSingleton2 === newSingleton2_2) {
  console.log("es igual");
}
