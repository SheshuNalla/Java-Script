console.log(this);


var user = {
    firstName : "sheshu",
    getCourse : function(){
        console.log("LINE7", this); // Here it is not a regular function , but it is a object method. Now "this" points to the object.
        function sayHello(){
            console.log("line9", this); // For all regular function calls "this" points to window object.
        }
        sayHello();
    }
}

user.getCourse();