var triangle = ""
for(var i =1;i<=5;i++){
    for(var j=1;j<=i;j++){
        triangle = triangle+"*"
    }
    triangle = triangle+"\n"
}
console.log(triangle)

/*
*
**
***
****
*****
*/

//practice inverted triangle
var triangle = ""
for(var i=5;i>=1;i--){
    for(var j=1;j<=i;j++){
        triangle = triangle +"*"
    }
    triangle = triangle + "\n"
}
console.log(triangle)

/*
*****
****
***
**
*
*/


