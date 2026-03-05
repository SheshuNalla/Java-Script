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

for (i = 0; i < arr.length; i++){
    if(typeof(arr[i]) !== "string") continue;
    console.log(arr[i]);
}