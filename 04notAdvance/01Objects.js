var User = function(firstName, lastName, courseCount){   //Creating objects with the functional approach called "Constructor".
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${courseCount}`);
    }
}

User.prototype.getFirstname = function(){           // we can add more methods, properties by accessing "prototype" property.
    console.log(`User's Firstname is: ${this.firstName}`);
}


var sheshu = new User("sheshu", "Nalla", 3);  // everytime we use "new" keyword it creates a new objects reference to the "User" constructor.
console.log(sheshu);

//sheshu.getFirstname();

if (sheshu.hasOwnProperty("firstName")){
    sheshu.getFirstname();
}
sheshu.getCourseCount();


var sai = new User("sai", "U", 8);

if (sai.hasOwnProperty("firstName")){
    sai.getFirstname();
}
sai.getCourseCount();

// sai.getFirstname();

var akhilesh = new User("akhilesh", "P", 5);

if (akhilesh.hasOwnProperty("firstName")){
    akhilesh.getFirstname();
}
akhilesh.getCourseCount();