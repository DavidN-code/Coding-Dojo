

var likea =[];
function add1(id){
    var spanTag = document.querySelector('#' + id);
    var count = parseInt(spanTag.innerText);
    count +=1;
    spanTag.innerText = count;
    if(id == 'firstcount'){
        likea[0]= count;
    }
    else if(id =='secondcount'){
        likea[1]= count;
    }
    else{
        likea[2]= count;
    }
    console.log(likea)
}