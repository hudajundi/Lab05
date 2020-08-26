// var today = new Date();
// var hourNow = today.getHours();
// var greeting;  

// if (hournow > 18) {
//     greeting = ' Good evening'
    
// } else {
//     greeting = ' Good morning'
    
// }
// document.write('<h2>'+greeting+'</h2>')
// greeting;
function WelomingFunction() {
    alert ("Hello");
    console.log();
} 
WelomingFunction();


var apple = prompt("did you ate an apple today?");
var result;

if ( apple == "yes") {
    result = ' good';
} else {
    ( apple == "no")
    result = ' Go eat';
}
document.write('<h3>'+result+'</h3>');


var gender = prompt("Are you a boy ar a girl?");
var name ;

if (gender == "boy" ) {
    name = 'Hi, boy ';
    
} else {
    name = 'hi , girl';
    
} 
document.write ('<h4>'+name+'</h4>');



function Health(){
    //input
    var Weight = prompt('enter your weight');
    var Health;

    // processing
    if (Weight > 100) {
        document.write ("Obese");
        
    } else {
        document.write("healthy");
        
    } 
    //output
    return Health;
}
Health();


var apple_color = prompt("do you love red or green apples?");

if (apple_color =="red") {
document.write("this is your favourite apple")
document.write ("<img src='https://img.favpng.com/16/24/23/apple-red-delicious-perfume-fruit-png-favpng-cdrGhxzH27vcrPdAqN4x4THAA.jpg'> ");

} 
else if (apple_color == "green") {
document.write("this is your favourite apple")
document.write ("<img src='https://png.pngtree.com/png-clipart/20191115/ourmid/pngtree-fresh-green-apple-isolated-on-transparent-background-png-image_1952947.jpg' > ");
}

var numberOfApples= prompt("How many apples you want?");

while(numberOfApples < 1){
    var numberOfApples= prompt("no you should eat at least 1 apple");
}
for (var count=0; count< numberOfApples; count++) {

    document.write("this is apple number")
    document.write(count+1)
if (apple_color=="red") {

document.write ("<img src='https://img.favpng.com/16/24/23/apple-red-delicious-perfume-fruit-png-favpng-cdrGhxzH27vcrPdAqN4x4THAA.jpg'> ");
    
} 
else if (apple_color=="green") {
    document.write ("<img src='https://png.pngtree.com/png-clipart/20191115/ourmid/pngtree-fresh-green-apple-isolated-on-transparent-background-png-image_1952947.jpg' > ");

} 
}