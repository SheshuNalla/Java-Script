let arr = [
    "Telangana",
    "Andhra Pradesh",
    "Tamil Nadu",
    1947,
    "Rajastan",
    "Maharastra",
    "Uttar Pradesh",
    "Goa"
];

// for (let i = 0; i < arr.length; i++){
//     if(typeof(arr[i]) !== "string") continue;
//     console.log(arr[i]);
// }

let i = 0; // for while and do while we have to declare i outside of the loop. 

// do {
//     console.log(arr[i]);
//     i++;
// }while(i < arr.length)

while(i < arr.length){
    if(typeof arr[i] !== "number"){
        console.log(arr[i]);
    };
    i++;
}