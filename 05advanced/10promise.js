const one = () => {
    return "Iam the 1";
}

// const two = () => {
//     setTimeout(() => {
//         return "Timeout";
//     },3000)
// }

const two = () => {
    return new Promise((resolve, reject) => {    //promise constructor 
        setTimeout(() => {
        resolve("Iam the Two");
    },3000)
    })
}
    

const three = () => {
    return "Iam the 3";
};


const callMe = async() => {    // async keyword makes the whole method asynchronous
    valOne = one();
    console.log(valOne);

    valTwo = await two();     // await keyword makes js engine to wait untill the promise is settled
    console.log(valTwo);

    valThree = three();
    console.log(valThree);
};

callMe();
