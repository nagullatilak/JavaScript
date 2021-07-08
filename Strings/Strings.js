//String length
var name = "Tilak"
console.log(name.length)

//checking password
var password = "Tilak1998"
if(password.length >= 9){
    console.log("Your password is strong")
}

//Using Indexes and Searching
var sentance = "Hello i am Tilak sai kumar Hello"
sentance.indexOf("Hello") // This will return first index
sentance.indexOf("Tilak")
sentance.lastIndexOf("Hello")

//Testing the slice
var str = "Hello, Exicted, caln"
var sl = str.slice(7,14)
    console.log(sl)
    sl=str.slice(7)
    console.log(sl)
    sl=str.slice(-14,-6)
    console.log(sl)
    sl=str.slice(-13)
    console.log(sl)

//Testing of SubString

var str = "Hello, Exicted, caln "
var sb = str.substring(7,14)
console.log(sb)
 sb = str.substring(7)
console.log(sb)
 sb = str.substring(-13,-6)
console.log(sb)
 sb = str.substring(-13)
console.log(sb)

//Testing of substr
var str = "Hello, Exicted, caln"
var sb = str.substr(7,7)
console.log(sb)
 sb= str.substr(7)
console.log(sb)
 sb = substr(-13,7)
 console.log(sb)
 sb = substr(-13)
 console.log(sb)

 //String Replacing'
 var str = "I have chapathi for lunch and chapathi for dinner"
 lunch = str.replace("chapathi","puri")
 console.log(lunch)
 lunch = str.replace(/chapathi/g , "puri") // global Replacing
 console.log(lunch)
 lunch = str.replace(/Chapathi/gi, "pasta")
 console.log(lunch)

 //UpperCase  Lowercase
 var word = "happy"
 var upper = word.toUpperCase()
 console.log(upper)

 var word = "HAPPY"
 var lower = word.toLowerCase();
 console.log(lower)

 var word = " Happy "
 var clean = word.trim();
 console.log(clean)

 //Converting string to array

 var str = "1,2,3,4,5"
 var str1 = str.split(",")
 console.log(str1)

 var str = "1 2 3 4 5"
 var str1 = str.split(" ")
 console.log(str1)

 var str = "12345"
 var str1 = str.split("")
 console.log(str1)

 var str = "I have a puppy"
 var str1 = str.aplit(" ")
 console.log(str1)

 //Conveting String to a Number
 var num = "5"
 var newNum = Number(num);
 console.log(newNum)//5

 var num = "5.5"
 var newNum = Number(num)
 console.log(newNum)

 var num = "t5"
 var newNum = Number(num) //NaN
 console.log(newNum)

 var num = ""
  num = parseInt("5")
  num = parseInt("5.4")//5
  num = parseInt(" 5")

var num = ""
   num = parseFloat("5.5")
   num = parseFloat("5")
   num = parseFloat("0.5")
