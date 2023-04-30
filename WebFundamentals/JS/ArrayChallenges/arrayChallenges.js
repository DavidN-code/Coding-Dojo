// 1 ALWAYS HUNGRY
function alwaysHungry(arr){
    var foodpresent = false;
    for(var i=0; i<arr.length; i++){
        if (arr[i]=='food'){
            console.log('yummy');
            foodpresent = true;
        }
    }
    if(foodpresent != true){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//  2 HIGH PASS FILTER
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
                    filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//  3 BETTER THAN AVERAGE
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / (arr.length);
    var count = 0;
    for(var i =0; i < arr.length; i++){
        if(arr[i] > avg){
            count = count + 1;
        }
    }    
    // count how many values are greated than the average
    return count;
    }
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// 4 ARRAY REVERSE

function reverse(arr) {
    // your code here
    var rarr = [];
    for(var i = arr.length - 1; i >= 0; i--){
        rarr.push(arr[i]);
    }
    arr = rarr;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5 FIBONACCI ARRAY
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length<n){
            fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);

    }
    
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
