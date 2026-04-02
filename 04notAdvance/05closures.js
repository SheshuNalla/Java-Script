function x(){
    let a = 28;
    function y(){
        console.log(a);     //A function and its lexical scope bundled together forms a "Closure".
    }
    a = 100;
    return y;
    
    
}

var z = x();    // function x() returns function y() so "z" will store the function y()

z();   // z not only stores the function but also the lexical scope of x().