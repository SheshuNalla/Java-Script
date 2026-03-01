var isEven = (element) => { // arrow functions syntax

    // if (element % 2 === 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0; // either true/false
}

//console.log(isEven(4));

var result = [2,4,6,8,10].every((e) => e % 2 === 0); //callback function using arrow functions

console.log(result);