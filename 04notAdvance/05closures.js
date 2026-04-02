function x(){
    let a = 28;
    function y(){
        console.log(a);     //A function and its lexical scope bundled together forms a "Closure".
    }
    a = 100;
    return y;
    
    
}

var z = x();    //z will holds the execution of function x() and function x() returns function y() so "z" will store the function y()

z();   // z not only stores the function but also the lexical scope of x().


function doAdd(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAdd(5);
console.log(add5(5));


console.log(doAdd(5)(5));