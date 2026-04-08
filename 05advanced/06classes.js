class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    };
    courseList = [];

    enrollCourse(name){
        this.courseList.push(name);
    }

    getinfo(){
        return {name: this.name, email: this.email}
    }
    getCourseCount(){
        return this.courseList.length;
    };
    
};

module.exports =  User;