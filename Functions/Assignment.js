var amount = prompt("Enter the amount :")
function cashier(amount){
    let newCost
    let cost =5
    newCost = amount - cost
    return newCost
}
if(cashier(amount)==0){
    console.log("You gave the exact amount.")
}
else if(cashier(amount) > 0){
    console.log("You gave too much. Your change due is =$"+cashier(amount))
}
else if(cashier(amount) < 0){
    var positiveValue = cashier(amount)*-1
    console.log("You gave too little. You still owe = $"+positiveValue)
}