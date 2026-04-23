const cart = ["pants", "kurtas", "shoes"];

// Consumer part

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId
})

.then(function(orderId){
    return proceedToPayment(orderId);          // Promise Chaining 
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    
})
.catch(function(err){           // Exception Handling
    console.log(err.message)
});

//Producer part

function createOrder(){

    const pr = new Promise(function(resolve, reject){

        if(!validateCart(cart)){
            const err = new Error("cart is not valid")
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },3000)
            
        }

    })

    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){   //Creating a promise
        resolve("payment successfull")
    })
}

function validateCart(cart){
    return true;
}