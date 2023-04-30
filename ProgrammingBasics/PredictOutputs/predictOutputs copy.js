// 1
var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}
// the for loop goes through and console.logs each element in the array.  it starts at the last element 
// and the index decrements until it gets to 0
// 
// variables    |   values
// ---------------------------------
// arr          |   ["Up", "You", "Give", "To", "Going", "Never"]

// output:
// Never
// Going
// To
// Give
// You
// Up


// 2
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

// this for loop starts at index 1, and the index i 
// is incremented by 2 every iteration so the loop 
// iterates every 2 indexes,
// so it starts at 2 and then goes to 4,6,8.  It stops as soon as 
// i is no longer less than the array's length which is 10.  
// So it stops at 8.
// for every iteration, it adds the index's element to the sum variable.
// for each iteration, it console.logs the element at the array's current index.
// for each iteration it also console.logs the current sum

// variables    |   values
// ---------------------------------
// arr          |   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sum          |   0 / 2 / 6 /  12 / 20
// i            |   1, 3, 5, 7, 9

/* output:
2
2
4
6
6
12
8
20
10
30
*/


// 3
var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}
// variables    |   values
// ---------------------------------
// arr          |   [8, 2, 0, 6, 12, 4, 3]

// this for loop starts at index 0, the first element of the array
// and goes all the way to the end of the array.
// the index increments by one with every iteration
// for every iteration, if the element in the current array index
// is greater than or equal to 6, then it
// console.logs true

/* output:
true
true
true
*/