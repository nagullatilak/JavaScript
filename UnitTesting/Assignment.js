function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s ") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function test(name,expected,actual)
{
    if(expected === actual)
    {
        console.log(name+ "\nTest Passed : "+expected +"  is equal to "+ actual)
    }
    else{
        console.log(name+"\nTest Failed : "+ expected+" is not equal to "+ actual)
    }
}
//rock
test("p1 : b & p2 : s","Player 1 made an invalid selection.",rps("r","b"))
test("p1 : r & p2 : r","Tie",rps("r","r"))
test("p1 : r & p2 : p","Paper beats rock. Player 2 wins.",rps("r","p"))
test("p1 : r & p2 : s","Rock beats scissors. Player 1 wins.",rps("r","s"))
test("p1 : r & p2 : blah","Player 2 made an invalid selection",rps("r","b"))
//Paper
test("p1 : p & p2 : p","Tie",rps("p","p"))
test("p1 : p & p2 : r","Paper beats rock. Player 1 wins.",rps("p","r"))
test("p1 : p & p2 : s","Scissors beat paper. Player 2 wins.",rps("p","s"))
test("p1 : p & p2 : b","Player 2 made an invalid selection.",rps("p","b"))
//Scissors
test("p1 : s & p2 : s","Tie",rps("s","s"))
test("p1 : s & p2 : r","Rock beats scissors. Player 2 wins.",rps("s","r"))
test("p1 : s & p2 : p","Scissors beats paper. Player 1 wins.",rps("s","P"))
test("p1 : s & p2 : b","Player 2 made an invalid selection.",rps("s","b"))