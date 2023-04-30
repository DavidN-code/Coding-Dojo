//variables to determine if a person can ride the roller coaster
var minimum_height = 42;
var minimum_age = 10;
// the person's height and age
var height = 20;
var age = 11
/* 
   Stretch Feature 1 
This if statement checks if BOTH height and age meet minimum requirements
   if (height >= minimum_height && age >= minimum_age){
    Stretch Feature 2
This conditional if statement checks if EITHER the height or age meet the minimum requirement
*/
if (height >= minimum_height || age >= minimum_age){
    console.log("Get on that ride, kiddo!");
}
// the else statement is what to do if neither the height nor age met minimum requirements
else {
    console.log("Sorry kiddo, maybe next year");
}