//comparing operators
// == : Equal to
// === : Equal to but with type
// != : Not equal to
//!== : Not equal to
//> : greater than
// < : Lessthan
// >= : Greaterthan or equal
// <= : lessthan or equal

//if condition
if(1==1){
    console.log("This is same")
}

if(2>1){
    console.log("2 is greater than 1")
}

//Activity what if

var color =prompt("Enter yout fevorite color")
if(color == "blue")
  console.log("This is blue color")

  //if else

var yourNumber =2
var myNumber =2
if(yourNumber == myNumber){
  console.log("They are same")
}
else {
    console.log("They are Different")
}

var name = "Tilak"
if(name == "Tilak"){
  console.log("Hello my name is"+name)  
}
else{
  console.log("Hello "+name+ "nice to meet you")
}

//Now Activity
 var answer = prompt("What is your favorite animal")
 if(answer == "dog"){
   console.log("That is my favorite animal too")
 }
 else{
   console.log("I think that "+answer+ " a would be ")
 }

 //else if
 if(1 == 2){
   console.log("One is the same")
 }
 else if(2 == 2){
   console.log("Two is the same")
 }

 else {
   console.log("Neither are the same")
 }

 var myName = "Tilak"
 var yourName ="Sai"
 if(myName == yourName){
   console.log("We have the same name")
 }
 else if(myName != yourName){
   console.log("Hello" +yourName)
 }
 else {
   console.log("There was an error")
 }
 
 //Activity : But what if this other thing?
 var answer = prompt("What is your favorite food")
 if(answer == "biryani"){
   console.log("That is great")
 }
 else if(answer == "Pizza"){
   console.log("Pizza is great")
 }
 else if(answer == "burger"){
   console.log("Burgers ")
 }
 else{
   console.log(answer + "sounds great too")
 }

 //Comparing Multiple sets of data using if statements
 // && -- and
 // ||  -- are
 if((1 == 1) && (2==2)){
   console.log("Both are same")
 }

 //or

 if((1==1) ||(2 == 2)){
   console.log("One or both are same")
 }

