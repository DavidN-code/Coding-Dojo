function edit(id){
    var name = document.querySelector('#'+id);
    name.innerText = "Skeletor";
}
function remove(id1,id2,id3){
    var connect = document.querySelector('#'+id1);
    connect.remove();
    var creq = document.querySelector('#'+id2);
    var count = parseInt(creq.innerText);
    count--;
    creq.innerText = count;
    var yourc = document.querySelector('#'+id3);
    yourplus = parseInt(yourc.innerText);
    yourplus++
    yourc.innerText = yourplus;
}