var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is: ${this.name}`);
    }
}

var sheshu = Object.create(User);

sheshu.name = "sheshu";
sheshu.getUserName();


// var sheshu = Object.create(User, {        
//     name : {value: "Usai"}
// });

// sheshu.getUserName();

// var sai = Object.create(User, {
//     name: {value: "Sai Krishna"},
//     age: {value: 25}
// });

var sai = Object.create(User, {
    name : {value: "saikrishna"},
    age : {value: 23}
})


// sai.name = "Sai Krishna";
sai.getUserName();
console.log(sai);


