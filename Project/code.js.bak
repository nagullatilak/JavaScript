// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "blue","orange","brown","purple","white","black","green","grey","pink","indigo","violet"];


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Tilak",
        lastName: "Nagulla"
    },
    {
        firstName: "Maruthi",
        lastName: "ulasa"
    },
    {
        firstName: "Yogi",
        lastName: "Thota"
    },
    {
        firstName: "Vijay",
        lastName: "Thondhuri"
    },
    {
        firstName: "Teja",
        lastName: "Nagulla"
    },
    {
        firstName: "Praveen",
        lastName: "Thota"
    },
    {
        firstName:"Tharun",
        lastName:"Kosuri"
    }
];

function randNum(){
    
    document.getElementById("p1").innerHTML = randomGenerator(1,100)
}

function randNumGen(){
    var rand1 = Math.round(document.getElementById("rand1").value)
    var rand2 = Math.floor(document.getElementById("rand2").value)
    var num = randomGenerator(rand1,rand2)
    document.getElementById("p2").innerHTML = num
}
//long Lorem Ipsum String
function ipsumFun() {
    document.getElementById("p3").innerHTML = lorem;
}

//Lorem Ipsum String based on the number or sentences specified
function sentance() {
    var number = document.getElementById("num1").value
    var newLorem = lorem.split(".");
    var a = ""
    for (var i = 0; i < number; i++) {
        a = a + newLorem[i] + " | \n";
    }
    document.getElementById("p4").innerHTML = a;
    console.log(a)
    if (number == "") 
        document.getElementById("p4").innerHTML = "Enter a number in the textbox.";

}
//Lorem Ipsum String based on the number or character specified
function count() {
    var number = document.getElementById("num2").value
    var newLorem = lorem.split("");
    var a = ""
    for (var i = 0; i < number; i++) {
        a = a + newLorem[i] + " - \n";
    }
    document.getElementById("p5").innerHTML = a;
    console.log(a)
    if (number == "") document.getElementById("p5").innerHTML = "Enter a number in the textbox.";

}
//Returns the current date(formatted)
function getDt() {
    var dt = new Date();
    var a = dt + "\n --- And the normal date is :" + dt.getDay() + "-" + dt.getMonth() + "-" + dt.getFullYear()
    document.getElementById("p6").innerHTML = a;

}
//formatted current time
function getTim() {
    var dat = new Date()
    var hr = dat.getHours()
    var min = dat.getMinutes()
    var ap
    if (hr < 12){
        ap = "AM"
        if (hr < 10) 
            hr = "0" + hr
    } 
    else if (hr > 12)
    {
        ap = "PM"
        hr = hr - 12
    }    
    if (min < 10) min = "0" + min
    var a = hr + ":" + min + " " + ap;
    document.getElementById("p7").innerHTML = a;
}
//Converting Inches to feets
function conversion(){
    var num = document.getElementById("num3").value
    document.getElementById("p8").innerHTML = num/12
}
//Converting feets to inches
function conversionFtI(){
    var num = document.getElementById("num4").value
    document.getElementById("p9").innerHTML = num*12
}
//Comparing string length

function calculate(){
    var l1 = document.getElementById("word1").value
    var l2 = document.getElementById("word2").value
    if(l1.length == l2.length){
        document.getElementById("p10").innerHTML = "Both the strings having same length"
    }
    else{
        document.getElementById("p10").innerHTML = "Length of the strings are different"
    }
}
//returns a random password
function randomPassword() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    chars = chars.split("")
    console.log(chars)
    //lenght 8
    var a = ""
    for (let i = 0; i < 8; i++) {
        var m = randomGenerator(1, 64)
        console.log(chars[m])
        if (chars[m] == undefined) {
            a = a + "L"
            continue
        }
        a = a + chars[m];
    }
    document.getElementById("p11").innerHTML = a + "   ---Size of password using .lenght " + a.length
}
//random generator
function randomGenerator(min, max) {
    var rand = Math.floor( parseInt(min) + parseInt(Math.random() * (max - min + 1)))
    return rand;
}
function checkInteger(){
    var num = document.getElementById("num6").value
    if ((num == NaN) || (num == "") || (num == " ")) {
        document.getElementById("p12").innerHTML="Enter an integer value not a character or string."
    }
   else if(num%2==0){
        document.getElementById("p12").innerHTML = "Given Number is even number"
    }
   
    else{
        document.getElementById("p12").innerHTML = "Given Number is odd number"
    }
}
//returns random color
function randomColor() {
    var ran = randomGenerator(0, 6)
    console.log(ran)
    document.getElementById("p13").innerHTML = colors[ran]
}

//returns a random first name and last name
function randomName() {
    min = Math.ceil(0)
    max = Math.floor(names.length)
    var num = Math.floor(Math.random() * (max - min)) + min
    document.getElementById("p14").innerHTML = " First Name: " + names[num].firstName + " Last Name: " + names[num].lastName
}