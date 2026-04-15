const one = () => {
    console.log("Iam the 1");
}

const two = () => {
    setTimeout(() => {
        console.log("Timeout");
    },3000)
    console.log("Iam the 2");
}

const three = () => {
    console.log("Iam the 3");
}


two();
three();
one();