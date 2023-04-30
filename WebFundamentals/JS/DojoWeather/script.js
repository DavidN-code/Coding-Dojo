function hide(elem){
    var gone =document.querySelector(elem);
    gone.remove();
}
function tempchange(hi,lo,hi1,lo1,hi2,lo2,hi3,lo3,thi){
    if(thi.value.startsWith('C')){
    
        
        var high = document.querySelector('#'+hi);
        var low = document.querySelector('#'+lo);

        var newhigh = parseInt(high.innerText);
        newhigh = newhigh-32;
        high.innerText = newhigh;
        var newlow = parseInt(low.innerText);
        newlow = newlow-32;
        low.innerText = newlow;

        var high1 = document.querySelector('#'+hi1);
        var low1 = document.querySelector('#'+lo1);

        var newhigh1 = parseInt(high1.innerText);
        newhigh1 = newhigh1-32;
        high1.innerText = newhigh1;
        var newlow1 = parseInt(low1.innerText);
        newlow1 = newlow1-32;
        low1.innerText = newlow1;



        var high2 = document.querySelector('#'+hi2);
        var low2 = document.querySelector('#'+lo2);

        var newhigh2 = parseInt(high2.innerText);
        newhigh2 = newhigh2-32;
        high2.innerText = newhigh2;
        var newlow2 = parseInt(low2.innerText);
        newlow2 = newlow2-32;
        low2.innerText = newlow2;
        
        
        
        var high3 = document.querySelector('#'+hi3);
        var low3 = document.querySelector('#'+lo3);

        var newhigh3 = parseInt(high3.innerText);
        newhigh3 = newhigh3-32;
        high3.innerText = newhigh3;
        var newlow3 = parseInt(low3.innerText);
        newlow3 = newlow3-32;
        low3.innerText = newlow3;
}




if(thi.value.startsWith('F')){

    
    var high = document.querySelector('#'+hi);
    var low = document.querySelector('#'+lo);

    var newhigh = parseInt(high.innerText);
    newhigh = newhigh+32;
    high.innerText = newhigh;
    var newlow = parseInt(low.innerText);
    newlow = newlow+32;
    low.innerText = newlow;

    var high1 = document.querySelector('#'+hi1);
    var low1 = document.querySelector('#'+lo1);

    var newhigh1 = parseInt(high1.innerText);
    newhigh1 = newhigh1+32;
    high1.innerText = newhigh1;
    var newlow1 = parseInt(low1.innerText);
    newlow1 = newlow1+32;
    low1.innerText = newlow1;



    var high2 = document.querySelector('#'+hi2);
    var low2 = document.querySelector('#'+lo2);

    var newhigh2 = parseInt(high2.innerText);
    newhigh2 = newhigh2+32;
    high2.innerText = newhigh2;
    var newlow2 = parseInt(low2.innerText);
    newlow2 = newlow2+32;
    low2.innerText = newlow2;
    
    
    
    var high3 = document.querySelector('#'+hi3);
    var low3 = document.querySelector('#'+lo3);

    var newhigh3 = parseInt(high3.innerText);
    newhigh3 = newhigh3+32;
    high3.innerText = newhigh3;
    var newlow3 = parseInt(low3.innerText);
    newlow3 = newlow3+32;
    low3.innerText = newlow3;
}
}