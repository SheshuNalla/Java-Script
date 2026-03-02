var testArray = [2,1,3,7,8,5,4,9];

//console.log(testArray.fill("s",4,7)); 


var numbers = [2,1,4,3,9,80,67,23,22,98];

var result = numbers.filter( (num) => num >= 20);

//console.log(result);


// Slice and Splice methods in Array

var users = ["sai","sooraj","dinesh","teja","tim"];


//console.log(users.slice(0,3)); // trims the array with the given starting index and ending index.

users.splice(1,2,"Sheshu","mahesh"); //replaces elements with the given indexes and the new values.

console.log(users);