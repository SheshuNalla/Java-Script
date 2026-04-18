const one = () => {
    return "Iam the 1";
}


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


const callMe = async() => {    // async keyword makes the function return a promise automatically and allows you to use await inside it.
    valOne = one();
    console.log(valOne);

    valTwo = await two();     // await keyword makes execution to wait untill its completion of execution of method two.
    console.log(valTwo);

    valThree = three();
    console.log(valThree);
};

callMe();
