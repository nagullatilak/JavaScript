var family ={
    mother :{
        firstName :"Kumari",
        lastName : "Nagulla"
    },
    father : {
        firstName : "Srinivasa Rao",
        lastName : "Nagulla",
        isAlive :true    
    },
    children : [ {
                 firstName : "Tilak",
                 lastNmae : "Nagull",
                 isAlive : true
    },
    {
        firstName : "Syamala",
        lastName : "Nagulla",
        isAlive : true
    }
],
    
    isRich : true
}
console.log(family)
console.log(family.father.firstName);
console.log(family.isRich)
console.log(family.children[0].firstName +" "+family.children[1].lastName)
console.log(family.bulter.isAlive)