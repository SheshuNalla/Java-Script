// Create an Application with the following roles:
// Admin - Gets the full Access
// Subadmin - gets access to create/delete courses
// Testprep - gets access to create/delete courses
// student - gets access to consume content



var user = "others";
 
// if (user === "admin"){
//     console.log("Yout gets the full access");
// }
// else if(user === "subadmin"){
//     console.log("gets access to create/delete courses");
// }
// else if(user === "testprep"){
//     console.log("gets access to create/delete tests");
// }
// else if(user === "student"){
//     console.log("gets access to consume the content");
// }
// else{
//     console.log("trial user");
// }


switch (user) {
    case "admin":
        console.log("gets full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "student":
        console.log("gets access to consume content");
        break;

    default:
        console.log("trail user");
        break;
}