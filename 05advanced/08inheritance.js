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
};

let sooraj = new subAdmin("sooraj", "sooraj@gmail.com", 23);

// console.log(sooraj);
sooraj.login();
