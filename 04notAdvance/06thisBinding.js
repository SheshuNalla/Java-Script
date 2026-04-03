const sheshu = {
    firstName : "Sheshu",
    lastName : "Nalla",
    role : "admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            first name is ${this.firstName}
            last name is ${this.lastName}
            his role is ${this.role}
            he is studying ${this.courseCount} courses.
            `)
    }
}

const sai = {
    firstName : "Sai",
    lastName : "U",
    role : "sub-Admin",
    courseCount : 4
}

sheshu.getInfo();

var saiInfo = sheshu.getInfo.bind(sai);   //Borrowing method using "Bind" property.
saiInfo();                                //"Bind" property gives only reference of the function and we've to call it.

sheshu.getInfo.call(sai);                 //"Call" property directly calls the function.

// NOTE: "Bind" and "Call" properties are the function properties not an object properties.