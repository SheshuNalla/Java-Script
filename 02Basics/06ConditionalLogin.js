// Allow user to access the course if he is:
// logged in from email
// logged in from facebook
// logged in from google


var email = false;
var facebook = false;
var google = false;

// if (email){
//     console.log("Login successfull");
// }
// if (facebook){
//     console.log("Login successfull");
// }
// if (google){
//     console.log("Login successfull");
// }


if(email || facebook || google){
    console.log("Login successfull");
}else{
    console.log("You have to Login..!");
}
