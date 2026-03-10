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

do {
    if(typeof arr[i] !== "number"){      // without continue/break keywords.
        console.log(arr[i]);
    }
    
    i++;
}while(i < arr.length);

// while(i < arr.length){
//     if(typeof arr[i] !== "string"){      // with continue keyword.
//         i++;
//         continue;
//     };
    
//     console.log(arr[i]);
//     i++;
// }