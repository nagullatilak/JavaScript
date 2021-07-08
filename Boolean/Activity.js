//Activity

var answer = prompt("Do you like cricket ? Y or N")
var isItTrue
if(answer == "Y"){
    isItTrue = true
    console.log("Your answer was "+answer)
}
else if(answer == "N"){
    isItTrue = false
    console.log("Your answer was "+answer)
}
else{
    console.log("I did't understand")
}