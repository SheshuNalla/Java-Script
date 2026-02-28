var countries = ["India","USA","Australia","China"];

var states = new Array("Assam","Telangana","Mumbai","Kerala","Delhi");


//console.log(states[3]);

//console.log(countries[1].length);

states[0] = "Rajastan";

//console.log(states);

var user = ["Sheshu",3,23,true];
console.log(user);

user.pop();//removes a value at end of the array

user.unshift("Rollno18");//adds a value at start of the array
console.log(user);
user.shift();//removes a value at start of the array
console.log(user);

user.push("sheshu");//adds a new value at the end of the array
console.log(user);

console.log(user.indexOf(3));//finds the index of the given element.