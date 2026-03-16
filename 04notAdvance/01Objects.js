var User = function(firstName, lastName, courseCount){
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${courseCount}`);
    }
}

var sheshu = new User("sheshu", "Nalla", 3);

console.log(sheshu);

var sai = new User("sai", "u", 3);
console.log(sai);