var i = 0
while(i<5){
    console.log(i)
    i++
}
//Reverse of a number
var i = 1234
var sum =0
while(i> 0){
var rem = i%10
sum = rem+sum*10
i=i/10
}
console.log(sum)

//do while loop
var i =1
do{
    console.log(i)
    i++
}while(i<=5)

//Difference b/w for ,while 

for(var i = 0;i<=5;i++){
    console.log(i)
}

var areYouHappy = true
while(areYouHappy){
    var answer =prompt("Are You Happy....")
    if(answer == "yes"){
        console.log("You are Happy...")
    }
    else{
        areYouHappy = false
        console.log("You are not happy")
    }
}

//Difference b/t while and do-while
var i=1
while(i<5){
    console.log(i)
    i++
}

var i = 1
do{
    console.log(i)
}while(i<0)