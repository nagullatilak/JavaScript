function btnPressed(){
    console.log("Button one pressed")
    document.getElementById("p1").innerHTML ="Button 1 was clicked"
    alert("Button1 was clicked")
}
function textTyped(){
    console.log("On change")
    var text = document.getElementById("i1").value
    var length = text.length
    document.getElementById("p2").innerHTML = "Characters Typed "+length
}
document.getElementById("b2").addEventListener("click",btn2Pressed)
function btn2Pressed(){
    console.log("Button 2  pressed")
document.getElementById("p3").innerHTML = ""
}

document.getElementById("i2").addEventListener("change" , moused)
function moused(){
    console.log("text")
document.getElementById("p4").style.fontSize = "x-large"
}