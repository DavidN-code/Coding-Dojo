var speed= 6;
// we know we need a for loop here because it is the best tool to use for this purpose,
// which is to give a candy every 2 miles, stopping at 6.  
// loop starting point is 0 miles
// loop stops at 6 miles
// the loop knows when to stop because in the set up for the for loop, the
// mile<=6; evaluates whether mile is less than or equal to 6.  
//  as long as mile is less than or equal to 6, the loop will run.
//  and each time the loop runs, the mile variable is increased by 2
// when mile increases beyond 6, the mile<=6 is no longer true and the loop ends
// there is an increment of 2 in each loop iteration
// variables needed are mile to count the miles, and speed for the bonus
for (var mile=0; mile<=6; mile=mile+2){
    if (mile>0 && speed>5.5){
    console.log(mile, "miles, and so fast.  Candy for you")
    }
}