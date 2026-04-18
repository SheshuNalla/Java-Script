const one = () => {
    console.log("Iam the 1");
}

const two = () => {
    setTimeout(() => {
        console.log("Iam the 2");
    },3000)
    
}

const three = () => {
    console.log("Iam the 3");
}

one();
two();
three();
