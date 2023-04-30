var count = 3;
var countElement = document.querySelector("#likesid");

function add1(){
    count++;
    countElement.innerText = count + " like(s)";
}