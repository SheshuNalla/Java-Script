const one = () => {
    return "Iam the 1";
}

// const two = () => {
//     setTimeout(() => {
//         return "Timeout";
//     },3000)
// }

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Iam the Two");
    },3000)
    })
}
    

const three = () => {
    return "Iam the 3";
};


const callMe = async() => {
    valOne = one();
    console.log(valOne);

    valTwo = await two();
    console.log(valTwo);

    valThree = three();
    console.log(valThree);
};

callMe();
