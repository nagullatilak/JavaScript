/*For loop : Starting place , condition , increment
i= i+1
i++*/
for(var i=0;i<=10;i++){
    console.log(i)
} 

for(var i=0;i<=5;i++){
    console.log("Helo.."+i)
}

//Arrays with for loop

var books =["book1","book2","book3" ,"book4","book5"]
for(var i=0;i<books.length;i++){
    console.log(books[i])
}
//for loop with if condition

for(var i = 1;i<5;i++){
    if(i ==1 )
    console.log("Hello")
    else if(i == 2)
    console.log("Hi")
    else if(i == 3)
    console.log("Bye")
    else
    console.log("See Yaa")   
}

//breaking the for loop
for(var i = 1;i<5;i++){
    if(i==3)
    break
    else
    console.log(i)
} 