function btn1Clicked() {
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function charsTyped() {
    var chars = document.getElementById("i1").value

    createString(chars)
}

function createString(someString) {
    document.getElementById("p2").innerText = "Characters typed:  " + someString.length
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {
    var main = document.getElementById("mains")
    var child = document.getElementById("p3")

    main.removeChild(child)
}

document.getElementById("i2").addEventListener("change", valueEntered)

function valueEntered() {
    

    document.getElementById("p4").style.fontSize = "x-large"
}