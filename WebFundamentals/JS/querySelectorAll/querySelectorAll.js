var colors = document.querySelectorAll(".color");

function applyColors(){
    for(var i = 0; i < colors.length; i++){
        colors[i].style.color = colors[i].innerText;
    }
}