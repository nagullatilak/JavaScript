var restaurantMenu = {
    restaurantName : "Madhus",
    menu :[{name : "Biryani",
                price : 300
            },
             {
                 name : "Ice cream",
                 price : 200
             },
             {
                 name : "Meals" ,
                 price :  250
             },
             {
                 name : "pizza",
                 price : 150
             },
             {
                name : "Burger",
                price : 200 
             }


    ],
    seeMenu : function(){
        var item = ""
        for (var i = 0; i < 5; i++) {
            item = item + i + ": " + this.menu[i].name + " : " + this.menu[i].price + "\n" 
        }
        alert(item)
    },
    choose : function(){
        var answer =prompt("Select the item number 0-4")
        if(answer>=0 && answer<5){
            alert("you choose "+this.menu[answer].name+ " "+this.menu[answer].price)
        }
        else{
            alert("Your entered item is not avialbe")
        }
    }
}
