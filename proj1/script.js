let counter = document.getElementById("counter");
let followers = document.getElementById("followers");
let button = document.getElementById("button");

let count = 0;

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerHTML = count;
    }
},1);

setTimeout( () => {
    followers.innerHTML = "Followers on Instagram";
},4700);


// Counter App with Increment, Decrement and Reset Buttons.


    // function increment(){
    //     count++;
    //     counter.innerHTML = count;
    // }

    // let decrement = () => {
    //     count--;
    //     counter.innerHTML = count;
    // }

    // let reset = () =>{
    //     count = 0;
    //     counter.innerHTML = count;
    // }

