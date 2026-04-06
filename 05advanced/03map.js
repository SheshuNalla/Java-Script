let myMap = new Map();

myMap.set(1,"uno");
myMap.set(2,"dos");
myMap.set(3,"tres");
myMap.set(4,"cuatro");

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// };

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// };

for(let [key, value] of myMap){                   //"for of" loop is always gives keys first and then values 
    console.log(`key is: ${key} and value is: ${value}`); // it is just iterating through the things.
};

myMap.forEach( (v, k) => console.log(`value is ${v} and key is ${k}`));  //"forEach" method gives values first and then gives the keys.
                                                                        // it is for some operation with the values not with the indexes.
                                                                        // in "Maps" keys are considered as indexes.

myMap.delete(1);  // deletes the element.
console.log(myMap);

myMap.clear();    //deletes all the elements in the map object.
console.log(myMap);