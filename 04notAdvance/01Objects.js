var User = function(firstName, lastName, courseCount){   //Creating objects with the functional approach called "Constructor".
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${courseCount}`);
    }
}

User.prototype.getFirstname = function(){           // we can add more methods, properties by accessing "prototype" property.
    console.log(`Your Firstname is: ${this.firstName}`);
}

var sheshu = new User("sheshu", "Nalla", 3);  // everytime we use "new" keyword it creates a new objects reference to the "User" constructor.
// console.log(sheshu);
sheshu.getCourseCount();
sheshu.getFirstname();


var sai = new User("sai", "u", 8);
// console.log(sai);
sai.getCourseCount();
sai.getFirstname();