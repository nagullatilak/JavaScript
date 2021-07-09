var person = {
    firstName : "Tilak",
    lastName :"Nagulla",
    favColor : "Blue"
}
person.age = 18
delete person.fevColor

//A different ways to add methods
var person = {
    firstName : "Tilak",
    lastName : "Nagulla",
    myName : function(){
        console.log(this.firstName+ " "+this.lastName)
    }
}

var person = {
    firstName : "Tilak",
    lastName : "Nagulla",
    myName() {
        console.log(this.firstName+ " "+this.lastName)
    }
}

//Getters and Setters
//Getter gets the value of property
var person ={
    firstName :"Tilak",
    lastName : "Nagulla",
    get myName(){
        return this.firstName+" "+this.lastName
    },
    set myName(value){
        var name = value.split(" ")
        this.firstName = name[0]
        this.lastName = name[1]

    }
}

//Constructors
//Constructors are the blue print of an Object
var me = {
    firstName : "Tilak",
    lastName : "Nagulla",
    myName() {
        console.log(this.firstName+ " "+this.lastName)
    }
}

var bestFrnd = {
    firstName : "Tharun",
    lastName : "Kosuri",
    myName() {
        console.log(this.firstName+ " "+this.lastName)
    }
}
function person(first,last){
    this.firstName = first,
    this.lastName = last,
    this.myName = function(){
   console.log(this.firstName+" "+this.lastName)
    }
}

//Prototypes

function Person(first,last){
    this.firstName = first,
    this.lastName = last,
    this.myName = function(){
   console.log(this.firstName+" "+this.lastName)
    }
}
person.prototype.fevColor = "blue"
person.prototype.printcolor = function(){
    console.log(this.favColor)
}