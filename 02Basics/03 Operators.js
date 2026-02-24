let actualPrice = 799;
let sellingPrice = 199;

let discount =((actualPrice - sellingPrice) / actualPrice) * 100

let discountPercentage = Math.round(discount) 


console.log(discountPercentage + "% OFF")

var result = actualPrice > sellingPrice;

console.log(typeof(result));