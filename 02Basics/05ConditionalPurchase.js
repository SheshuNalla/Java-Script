//User is only allowed to make a purchase if he is:
//Logged in
//Email Verified
//CardInfo - Valid
//If anyone is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;


// if (isLoggedIn === true){
//     console.log("Logged in successfully");
//     if(isEmailVerified === true){
//         console.log("Email is verified");
//         if(cardInfo === true){
//             console.log("Continue with the purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
}
else{
    console.log("You are not allowed to make a purchase");
}