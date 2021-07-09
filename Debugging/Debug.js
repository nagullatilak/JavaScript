//Syntax Error
var i = 1 //Valid
var i 1//Invalid
if(i<3){
    console.log("Hello") //Valid
}

if(i 3){
    console.log("Wrong") //InValid
}

for(var i = 0;i<10;i++){
    console.log(i)
}
//Logic Error
for(var i =1;i<10 ; i){
    comsole.log("Logical Error")
}

if(1<2){
    console.log(false)
}