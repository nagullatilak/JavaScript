function btnPressed(){
    console.log("Button one pressed")
    document.getElementById("p1").innerHTML ="Button 1 is pressed"
}
function textTyped(){
    console.log("On change")
    if(document.getElementById("i1").value == "123"){
        document.getElementById("p2").innerHTML = "Valid Password"
    }
    else{
        document.getElementById("p2").innerHTML = "Invalid Password"
    }
}

//Event Listener

document.getElementById("i2").addEventListener("change",textTyped1)
function textTyped1(){
    console.log("Text change")
    if(document.getElementById("i2").value == "123"){
        document.getElementById("p4").innerHTML = "Valid Password"
    }
    else{
        document.getElementById("p4").innerHTML = "Invalid Password"
    }
}

document.getElementById("b2").addEventListener("click",btn2Pressed)
function btn2Pressed(){
    console.log("Button 2  pressed")
document.getElementById("p3").innerHTML = "Butten 2 Pressed"
}

document.getElementById("p4").addEventListener("mouseover" , moused)
function moused(){
this.innerHTML = "Your moused over"
}