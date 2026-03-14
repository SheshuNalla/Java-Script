var user = {
    firstName : "Sheshu",
    lastName : "Nalla",
    role : "Admin",
    userId : 12,
    loginCount : 32,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    courseCount : function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses.`
    },
    info : function (){
        return `${this.firstName} ${this.lastName}'s role is ${this.role} with the id of ${this.userId} and he accessed the ${this.courseList} courses and he is loggedin ${this.loginCount} times to this website.`
    } 
};

user.buyCourse("Python Full stack");
user.buyCourse("Java Full stack");

console.log(user.info());
console.log(user.courseList);

//console.log(user.courseList);
//console.log(user.courseCount());