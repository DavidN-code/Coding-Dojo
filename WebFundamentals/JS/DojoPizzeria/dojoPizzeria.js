function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("thin crust", "barbeque", ["asiago, mozarella"], ["chicken", "bacon"])
var p4 = pizzaOven("hand tossed", "marinara", ["mozarella", "parmesian"], ["pepperoni", "pineapple"])
// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)
function randomPizza(){
    var pizza = {};
    var crust = Math.random();
    crust = Math.round(crust*10);
    var sauce = Math.random();
    sauce = Math.round(sauce*10);
    var cheese = Math.random();
    cheese = Math.round(cheese*10);
    // CRUST
    if(crust <= 3){
        pizza.crust = "thin crust"
    }
    else if(crust <=6){
        pizza.crust = "deep dish"
    }
    else{
        pizza.crust = "hand tossed"
    }
    // SAUCE
    if(sauce <= 3){
        pizza.sauce = "traditional"
    }
    else if(sauce <=6){
        pizza.sauce = "marinara"
    }
    else{
        pizza.sauce = "barbeque"
    }
    // CHEESE
    if(cheese <= 3){
        pizza.cheese = ["mozarella"]
    }
    else if(cheese <=6){
        pizza.cheese = ["feta"]
    }
    else{
        pizza.cheese = ["asiago"]
    }
    // TOPPINGS
    // for(var i = 0; i < 3; i++)
    // topcount gets the Math.random number 1-10 
    // tops divides the 10 into thirds and determines how many toppings there will be.  
    var topcount = Math.random();
    topcount = Math.round(topcount*10);
    var tops = 0;
    if (topcount <= 3){
        tops = 1;
    }
    else if(topcount <=6){
        tops = 2;
    }
    else{
        tops = 3;
    }
    console.log(tops);
    var topa = [];
    // the for loop runs depending on how many toppings there will be.  
    // each time it runs, the Math.random makes a new number 1-10,
    // and then that random number is split into thirds and one of three toppings is assigned
    for (var i = 0; i < tops; i++){
        var toppings = Math.random();
        toppings = Math.round(toppings*10);
        if (toppings <= 3){
            topa[i] = "pepperoni";
        }
        else if(toppings <=6){
            topa[i] = "bacon";
        }
        else{
            topa[i] = "pineapple";
        }
    }
    // these if statements, basically make it so that if there is a repeated topping, it will say 'extra'
    if(topa.length == 3 || topa.length == 2){
        if(topa[2] == topa[1]){
            topa[2] = 'extra ' + topa[2];
        }
        if (topa[1]==topa[0]){
            topa[1]= 'extra ' + topa[1];
        }
        if (topa[2]==topa[0]){
            topa[2]= 'extra ' + topa[2];
        }
    }
    
    pizza.toppings = topa;
    return pizza;
    }
console.log(randomPizza())