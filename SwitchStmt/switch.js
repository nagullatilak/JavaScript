//Switch statement
var food = "pasta"
if(food == "Pizza"){
    console.log("Pizza")
}
else if(food == "pasta"){
    console.log("pasta")
}
else {
    console.log(food)
}

var favFood = prompt("What is your favorite food ")
switch(favFood){
    case "pasta" :
          console.log("pasta")
           break;
    case "Biryani" :
          console.log("Biryani")
            break;
    case "pizza" :
          console.log("pizza")
            break;
    case "Burger" :
          console.log("burger")
             break;
    default :
            console.log(favFood)

}