// import User from "./06classes";

const User = require("./06classes");


let sheshu = new User("sheshu", "sheshu@gmail.com");

console.log(sheshu.getinfo());

sheshu.enrollCourse("java");
sheshu.enrollCourse("python");
sheshu.enrollCourse("react");
console.log(sheshu.courseList);

let courses = sheshu.courseList;

courses.forEach((c) => console.log(c));

console.log(sheshu.getCourseCount());