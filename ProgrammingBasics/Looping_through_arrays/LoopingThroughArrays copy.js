// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
for (var i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
for (var i = 0; i < arr2.length; i++){
    console.log(i + arr2[i]);
}
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for (var i = 0; i < arr3.length; i++){
    if (arr3[i] > 5){
        console.log(arr3[i]);
    }
    else{
        arr3[i] = "No dice.";
    }
}