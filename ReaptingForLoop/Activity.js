var answer = prompt("Type YES or No")
var answers = ["YES","NO"]
var responses = ["You said Yes","You said No","You did'nt follow the directions"]
for(var i =0;i <3;i++){
    if(answer!= answers[0] && answer!= answers[1]){
        console.log(responses[2])
        break
    }
    else if(answer == answers[i]){
        console.log(responses[i])
    }
}

//for loop inside for loop
var numbers =[1,2,3,4,5]
var characters = ["a","b","c","d","f"]
for(var i =0;i<numbers.length;i++){
    console.log(numbers[i])
    for(var j =0;j <=i;j++){
        console.log(characters[j])
    }
}

//Activiy the square
var square = ""
for(var i=1;i<=4;i++){
    for(var j= 1;j<=4;j++){
        square = square + "*"
    }
    square = square + "\n"
}
console.log(square)

var square = ""
for(var i=1;i<=4;i++){
    for(var j= 1;j<=4;j++){
        square = square + "ival ="+i+"jval ="+j
    }
    square = square + "\n"
}
console.log(square)