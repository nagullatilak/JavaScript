//Variable scope
var num = 1
function thing(){
  num = 2
  var num2 =3
  console.log("Inside Function :"+num)
  console.log("Inside function"+num2)
}
thing()
console.log("OutSide of Function"+num)
console.log("Outside of function"+num2)

//var 
//let
//const

let num =1
function things(){
    console.log("Inside function"+num)
   // num = 2
}
things()
console.log("Out side of function"+num)

function thing(){
    let num =1
    console.log("Inside function = "+num)
}
thing()
console.log(num)

var num = 1
if(1 == 1){
    console.log("Inside function = "+num)
}
console.log("Outside of the function = "+num)

if(1==1){
    let num = 1
    console.log("Inside function = "+num)
}
console.log("OutSide function = "+num)