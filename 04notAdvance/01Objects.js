var User = function(firstName, lastName, courseCount, age){   //Creating objects with the functional approach called "Constructor".
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.age = age
    this.getCourseCount = function(){
        console.log(`Course count is: ${courseCount}`);
    }
}

User.prototype.getFirstname = function(){           // we can add more methods, properties by accessing "prototype" property.
    console.log(`Your Firstname is: ${this.firstName}`);
}

User.prototype.getAge = function(){             // Added another Method getAge()
    console.log(`User ${this.lastName} ${this.firstName}'s age is: ${this.age}`);
}

var sheshu = new User("sheshu", "Nalla", 3, 23);  // everytime we use "new" keyword it creates a new objects reference to the "User" constructor.
// // console.log(sheshu);
// sheshu.getCourseCount();

if (sheshu.hasOwnProperty("firstName", "age")){
    sheshu.getFirstname();
    sheshu.getAge();
}


//sheshu.getAge();


var sai = new User("sai", "U", 8, 24);
// console.log(sai);
// sai.getCourseCount();

if (sai.hasOwnProperty("firstName", "age")){
    sai.getFirstname();
    sai.getAge();

}
// sai.getFirstname();
//sai.getAge();

var akhilesh = new User("akhilesh", "P", 5, 23);

if (sai.hasOwnProperty("firstName", "age")){
    sai.getFirstname();
    sai.getAge();
}