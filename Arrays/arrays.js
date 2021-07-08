//Arrays 
//Note : By using variables we can store only single if we want to store more values it is diffcult

//Arrays : Single variabe that is used to store differnt elements and access them by using single variable

var container = []
var people = ["Tilak","Sai","Kumar"]

//Array are indexed started from 0



//pop() - It is mainly used to remove the last inserted element from the array
var container = ["red","blue","green","yellow"]
container.pop()
conatiner = ["red","blue","green"]

//push() - It will insert the element into the array and return the index
var container = ["red","blue", "Green"]
conatiner.push("Yellow")
conntainer = ["red","blue","Green","Yellow"]

//shift() - It will remove the first inserted element from the Array

var container = ["red","blue","green","yellow"]
conatiner.shift();
container =["blue","green","yellow"]
container.unshift("pink")
container = ["pink","blue", "green" ,"yellow"]

//Changing specific elements

var container = ["red","blue","green","yellow"]

container[0] = "pink"

//Splice method changes the content in an array by replacing or removing the elemnts and are adding the new elements
var container = ["red","blue","green","yellow"]
container.splice(0,0,"black") // add the black element at first
container.splice(0,1) //Remove the elements
container.splice(0,1,"purple") // removes the first element and add purple
container.splice(0,2,"pink","orange") //This will replace the first and second elements

//Slice method will do the shallow copy of a portion of an array into new object
var container = ["red","blue","green","yellow"]
var newContainer = container.slice(3)
var newContainer = container.slice(0,2) // Coping the elements for 0 - 2 index in to newContainer object