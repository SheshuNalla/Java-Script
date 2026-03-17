var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is: ${this.name}`);
    }
}

var sheshu = Object.create(User);

sheshu.name = "sheshu";
sheshu.getUserName();


var sheshu = Object.create(User, {        
    name : {value: "Usai"}
});

sheshu.getUserName();

