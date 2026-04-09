class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    };
    // #courseList = [];    //When we put a "#" hashtag before any property it becomes private and we cant access outside of the class.

    courseList = [];

    enrollCourse(name){   // In this method we are setting a value into it so it is nothing but a "Setter".
        this.courseList.push(name);
    }

    getinfo(){            
        return {name: this.name, email: this.email}
    }
    getCourseCount(){
        return this.courseList.length;
    };
    getCourseList(){     // In this method we are getting some info and it is nothing but a "Getter".
        return this.courseList;
    }
    
};

module.exports =  User;


const rock = new User("rock", "rock@mail.com");

rock.enrollCourse("java bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);