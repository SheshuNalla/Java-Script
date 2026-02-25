/* 
Define a function that can answer the role of a user.
A user can be following roles:
admin - gets the full access
subadmin - get access to create/delete courses
testprep - get access to create/delete tests
student - get access to consume content
Others - Trial users

Input : getUserRole(name, role)
*/
function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is a admin with all access`
            break; //it is unnecessary when using return
        case "subadmin":
            return `${name} is a subadmin with access to create/delete courses`
            break;
            case "testprep":
            return `${name} is a testprep with access to create/delete tests`
            break;
            case "student":
            return `${name} is a student with access to consume content`
            break;
    
        default:
            return `${name} is a trial user`
            break;
    }
}

var getRole = getUserRole("sheshu", "others");

console.log(getRole);
