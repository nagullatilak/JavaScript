//Defining a function
var message = function(){
    console.log("Hello!")
}
message()

//Declaring a function
function message(){
    console.log("Hello Tilak")
}
message()

function newMessage(){
    console.log("1")
    console.log("2")
    console.log("3")
}
newMessage()
newMessage()
newMessage()
newMessage()

//Returning Data
function getMessage(){
    return "Hello.."
}
getMessage()
console.log(getMessage())

function getNumber(){
    return 1
}
console.log(getNumber())

//Activity passing the buck
function getCost(){
    //Cost of Oranges
    return 5
}
console.log("$"+getCost())
console.log("Cost of 5 oranges = "+getCost())

function getNumber(){
    return 5
}
console.log(getNumber()+5)

function getSomeThing(){
    return getNumber()+5
}
console.log(getSomeThing())

//Parameters and Arguments
function message(message1 , message2){
  console.log(message1)
  console.log(message2)
}
message("Hi","Hello")