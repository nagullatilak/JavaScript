/*Unit Testing
  Tests against specific functions
  unit test typically automated
  Unit vs Integration
  Integration is a test of multiple component integrated together
  Types of Tests

  Actual vs Expected
  Actual : What the function ruturn
  Expected : What you expect to be returned

  Happy Path
  normal operation adding of two  numbers
  Negative path
  adding a letter to a number

  */
 //Function  for unitTesting
 //This is the simple function for test the equality
 //name : Title of test
 function test(name , Expected,actual){
     if(Expected === actual){
         console.log(name+ "\nTest passed Expected."+Expected+"is equal to actual"+actual+".")
     }
     else{
        console.log(name+ "\nTest failes Expected."+Expected+"is equal to actual"+actual+".")
     }
 } 
 function blah(num){
     return num
 }
test("This is sample test",blah(200),200)

//Activity of Testing
function test(name , Expected,actual){
    if(Expected === actual){
        console.log(name+ "\nTest passed Expected."+Expected+"is equal to actual"+actual+".")
    }
    else{
       console.log(name+ "\nTest failes Expected."+Expected+"is equal to actual"+actual+".")
    }
} 
function add(num1,num2){
    return (num1+num2)
}

//Two positive whole numbers
test("Two positive whole numbers",3,add(1,2))

//One Zero and number greaterthan Zero

test("One Zero and number greaterthan Zero",3,add(0,3))

//Two 2 digit number

test("Two 2 digit number",45,add(20,25))

//a single digit number and double digit number
test("a single digit number and double digit number",11,add(1,10))

//a posotive and negative number

test("a posotive and negative number",5,add(10,-5))

//Decimal and whole number
test("Decimal and whole number",2.5,add(2,0.5))

//A  number string plus a number
//Failed but you should check for type in your function
test("A  number string plus a number",5,add("2",3))

//String plus a String
//Failed but you should check for type in your function
test("String plus a String",25,add("2","5"))

//boolean plus a string
test("boolean plus a string","trueHi",add(true,"Hi"))

//Missing single number
//Failed but you should ensure all required values are present
test("Missing single number",null,add(1))

//Missing both numbesr
//Failed but you should ensure all required values are present
test("Missing both numbesr",null,add())