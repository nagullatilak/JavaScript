//Nesting if

var number = prompt("Enter the number")
var number1 =prompt("Enter second number ")
if(number == 1){
    if(number1 == 1){
       console.log("Both the numbers are correct")
    }
    else if(number1 == 2){
        console.log("Number and number1 are differnt")
    }
    else{
        console.log("Please enter the number in specified limit")
    }
}
else if(number == 2){
    if(number1 == 3){
        console.log("Both the numbers are different")
    }
    else {
    console.group("Please enter the number1 correctly")
    }
}
else{
    console.log("Please enter the number")
}


//Activity if this or that

//Version1
var answer1 = prompt("Enter the color :");
var answer2 = prompt("Enter the number 1-5 ")
if(answer1 == "blue" && answer2 == 1){
    console.log("Those were my choices tool ...")
}
else{
    console.log("You choose " +answer1+ " and "+answer2)
}

var answer1 = prompt("Enter the color :");
var answer2 = prompt("Enter the number 1-5 ")
if(answer1 == "blue" || answer2 == 1){
    console.log("Atleast one of those are match...")
}
else{
    console.log("You choose " +answer1+ " and "+answer2)
}

//Version2

var answer1 = prompt("Enter the color :");
var answer2 = prompt("Enter the number 1-5 ")
if(answer1 =="blue"){
    if(answer2 == 1){
        console.log("Those were choices tool...")
    }
    else{
        console.log("You did'nt choose 1")
    }
}
else{
    console.log("You did't choose blue")
}