function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
    var remain = numberOfPieces%numberOfPeople;
    return remain;
}
leftO=howMuchLeftOverCake(12,9);
console.log(leftO,"remaining")
if (leftO == 0){
    console.log("No leftovers for you!")
}else if(leftO==2){
    console.log('You have some leftovers')
}else if(leftO>2 && leftO<6){
    console.log("You have leftovers to share")
}else if (leftO >5){
    console.log("Hold another party!")
}