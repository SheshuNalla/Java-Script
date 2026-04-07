function sumOne(a, b, c){
    return a+b+c;
}

var myArr = [5, 4, 1];
console.log(sumOne(...myArr));    //Spread Operator: takes an array of values and seperates them and passes as an individual values.
                                      // Opposite eachother.
                               
 function sumTwo(a,b,...args){           // Rest Operator: takes individual values and bind together as an array.
    console.log(args);
    let multiple = a * b;
    let sum = 0;
    for(let arg of args){
        sum +=arg;
    }
    return [sum, multiple];
}

console.log(sumTwo(4,3,2,5,4,6));