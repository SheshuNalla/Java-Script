const user = ["sheshu", 4, "admin"];  

// console.log(user[0]);

var [name, courseCount, role] = user;   //Destructuring an Array.
console.log(name);
console.log(courseCount);
console.log(role);


//Destructuring an Object.
const user2 = {
    name: "sai",
    courseCount: 3,
    role: "sub-admin"
}

var {name, courseCount, role} = user2;  // In object destructuring the names in both should match. 

console.log(name);
console.log(courseCount);
console.log(role);