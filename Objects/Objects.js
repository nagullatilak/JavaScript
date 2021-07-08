//Objects

var person ={
    name : "Tilak",
    age : 23,
    isMarried : true ,
    children : ["child1","child2"],
    hairColor : "black",
    things :{
        name : "object",
        color : "Yellow"
    }
}
console.log(person)
console.log(person.name)
console.log(person.children)
console.log(person.things)
console.log(person.children[0])
console.log(person.things.name)

//Methods
var library = {
    bookName : "JavaScript",
    movies : "Bahubali",
    checkOut : function(){
        console.log("You have checked out the book "+this.bookName)
    },
    checkIn : function(number){
        console.log("You have checkedIn "+number+ " books")
    }
}

//Assigning new values
var person = {
       name :"Tilak",
       favNumber : 6,
       favColor : "blue",
       child : ["child1","child2"],

}

person.name ="Sai"