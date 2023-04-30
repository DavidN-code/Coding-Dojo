//1
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

//variables         |   values
//----------------------------
//function hello()  |   console.log('hello');

//output: 
//hello
//Dojo


//2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

//variables         |   values
//----------------------------
//function hello()  |   console.log('hello');
//                  |   return 15;
//result            |   15

//output:
//hello
//result is 15


//3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

//variables           |   values
//----------------------------
//function numplus()  |   console.log('num is', num);
//                    |   return num+15;
//result              |   18

//output:
//num is 3
//result is 18


//4
var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

//variables                 |    values
//--------------------------------------
//num                       |   15
//function logAndReturn()   |   console.log(num);   
//                          |   return num;
//result                    |   10

//output:
//15
//10
//10
//15


//5
var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

//variables                 |    values
//--------------------------------------
//num                       |    15
//function timesTwo()       |    console.log(num);   
//                          |    return num*2;
//result                    |    20

//output:
//15
//10
//20
//15


//6
function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//variables                      |    values
//--------------------------------------
//function timesTwoAgain()       |    console.log('num is', num);
//                               |    y = num*2;
//                               |    return y;
//result                         |    16

//output:
//num is 3
//num is 5
//result is 16


//7
function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
 
//variables            |    values
//--------------------------------------
//function sumNums()   |    return num1+num2;

//output:
//5
//8


//8
function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 
 //variables            |    values
//--------------------------------------
//function printSumNums()   |    console.log(num1);   
//                          |    return num1+num2;

//output:
//2
//5
//3
//8


//9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

 //variables           |    values
//--------------------------------------
//function sumNums()   |    var sum = num1 + num2;
//                     |    console.log('sum is', sum);
//                     |    return sum;
//result               |    8

//output:
//sum is 5
//sum is 8
//result is 8


//10
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

 //variables           |    values
//--------------------------------------
//function sumNums()   |    var sum = num1 + num2;
//                     |    console.log('sum is', sum);
//                     |    return sum;
//result               |    

//output:
//sum is 5
//sum is 3
//sum is 6
//sum is 3
//sum is 5
//sum is 8
//result is 19