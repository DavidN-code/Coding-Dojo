var equation = []
function press(val){
    equation.push(val)

    var disp = document.getElementById('display')
    if(val != '+' && val != '-' && val != '*' && val != '/'){
        disp.innerText = val

    }
}

function clr(){
    var ne = document.getElementById("display")
    ne.innerHTML = '0'
}

function numberConnector(equation){
    var newArr=[]
    var start = 0
    var end = 0
    var vals = 0
    var newnum = ''
    for (var i = 0; i < equation.length; i++){
        if(equation[i] == '+' || equation[i] == '-' || equation[i] == '*' || equation[i] == '/'){
            vals = i - (end+1)
            end = i
            for (var j = start; j< i; j++){
                newnum += equation[j]
            }
            console.log(newnum)
            console.log(equation[i])
            start = end+1
            newArr.push(newnum)
            newArr.push(equation[i])
            newnum=''
        }
    }
//     console.log(newnum)
// console.log(equation[end + 1])
//     console.log("ne",newnum)
    for(var a = end+1; a<equation.length;a++){
        newnum += equation[a]
        // console.log(newnum)

    }
    newArr.push(newnum)
    // console.log(equation[end])
    // console.log(newnum)
    return newArr
}
console.log(numberConnector([3,'+',3]))
// console.log(numberConnector([1,2,3, '+',2,2,'/',4,'*',3,2,2]))
// console.log(numberConnector([2,2,'*',2,'+',3, 45, '/', 1, 123]))
// var readyArr = numberConnector([1,2,3, '*', 33, '+',4,'/',5,43,'-',1,2])
// console.log(readyArr)


// function calc(arr){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] == '*' || arr[i] == '/'){

//         }
//     }
// }





// function findOp(arr){
//     var opArr = []
//     for(i = 0; i < arr.length;i++){
//         if(arr[i] == '*' || arr[i] == '/' || arr[i] == '+' || arr[i] == '-'){
//             opArr.push(arr[i])
//         }
//     }
//     return opArr
// }
// console.log(findOp([2, '*', 23,22,4,'/', 5,'*', 1, '+', 2, '-']))





function calculate(){
    var readyArr = numberConnector(equation)
    var result = calculating(readyArr)
    console.log(result)
    document.getElementById("display").innerText = result
}
// var equation = [3,'+',3]
// calculate()
// numberconnector
// findmultiply/div
// precalc

// [1,2,3,4,5]

// arr.splice(0, 3, 6)

// arr.splice(2, 3, 7)  [1, 2  , 7]
// [6,4,5]

// [ 3, x, 2,0 /, 4]

// arr.splice(0, 3, 60)


function calculating(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == '*' || arr[i] == '/'){
            if(arr[i] == '*'){
                arr.splice(i-1,3,(arr[i-1])*(arr[i+1]))                
            } else{
                arr.splice(i-1, 3, (arr[i-1])/(arr[i+1]))
            }
            i=0
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == '+' || arr[i] == '-'){
            if(arr[i] == '+'){
                arr.splice(i-1, 3, (arr[i-1])+(arr[i+1]))
            } else{
                arr.splice(i-1, 3, (arr[i-1])-(arr[i+1]))
            }
            i=0
        }
    }
    return Math.round(arr)
}
// console.log(calculating([3,'+',3]))
// console.log(calculating([12,'+',22,'/',43,'*',1,'-',3]))
// console.log(calculating([1, '+', 2, '*', 5, '-', 3, '/',2, '+', 1]))
// console.log(calculating([1,'+',2,'-',1,'*',2,'+',1,'/',2,'*',2]))

