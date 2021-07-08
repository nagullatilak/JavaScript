function randomGen(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    var num = Math.floor(Math.random()*(max-min)+min)
    console.log(num)
}
randomGen(1.5,10)