const User = require("./06classes");

class subAdmin extends User{       // "extends" Keyword establishes the parent-child relationship. 
    constructor(name, email, age){
        super(name, email);        // We must call super() method before using "this" in child constructor 
        this.age = age;            //super() passes values the parent constructor.
    }
    login(){
        super.login();
        console.log("You are a subAdmin");
    }
    static hello(){                 //"static" used to defines methods or properties that are belongs to its class, not its instances
        console.log("Hello dear!"); // Not availabe to its instances but inherited by the subclasses/childclasses.
    }
};

subAdmin.hello();  //static methods or properties can be accessed by using the class name and are useful for shared or utility logic.

let sooraj = new subAdmin("sooraj", "sooraj@gmail.com", 23);
sooraj.enrollCourse("python");
console.log(sooraj.getCourseList());
// console.log(sooraj);
sooraj.login();
