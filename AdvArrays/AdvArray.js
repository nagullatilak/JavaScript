var arr = [1,2,3,4,5]
var length = arr.length;
console.log(length)

//toString
var str = ["Tilak","sai","kumar"]
var str1= str.toString();
console.log(str1)

var join = str.join("|")
console.log(join)

//Merging Arrays
var arr1 =[1,2,3,4,5]
var arr2 = [6,9,2,5]
var newArray = arr1.concat(arr2)
console.log(newArray)
 newArray = arr2.concat(arr1)
var arr3 = [11,4,7,13,14,67]
 newArray = arr1.concat(arr2,arr3)
 console.log(newArray)

 //sorting
 var arr = ["c","b","a","d"]
 arr.sort();//a,b,c,d
arr.reverse()//d,c,b,a


//Number sorting
var num =[897,125,789]
num.sort(function(a,b){return a-b})//125,789,879
num.sort(function(a,b){return b-a}) // 879,789,125

//forEach

var arr =[1,3,5,3,7]
var newNum =""
arr.forEach(funky)
function funky(value,index,array){
    newNum = newNum+index +" :"+value+ "&"+array[index]+"\n"
}

//map
var num = [1,2,3,4,5]
var newNum
newNum = num.map(funky)
function funky(value,index,array){
    newNum =index +" :"+value+ "&"+array[index]+"\n"
    return newNum
}

//filter
var arr =[2,5,1,8,10,14]
var num = arr.filter(isEven)
function isEven(value,index,array){
    return value % 2
}

//Example
var arr =[0,-2,9,-4,5]
var num = arr.filter(isNegative)
function isEven(value,index,array){
    return value<0
}