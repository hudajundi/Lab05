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


var apple = prompt("did you ate an apple today?")
var result;

if ( apple == "yes") {
    result = ' good';
} else {
    result = ' Go eat';
}
document.write('<h3>'+result+'</h3>')


var love = prompt("do you love red apple?")
var picture;

if (love =="yes") {
document.write ("<img src='https://img.favpng.com/16/24/23/apple-red-delicious-perfume-fruit-png-favpng-cdrGhxzH27vcrPdAqN4x4THAA.jpg'> ")   
} else {
    decument.write  ("<img src='https://cdn.pixabay.com/photo/2019/10/03/01/44/apple-4522286_1280.png' >")  
}
document.write('<p>'+picture+'</p>')


var gender = promp("Are you a boy ar a girl?")
var name ;

if (gender = "boy" ) {
    name = 'Hi, boy '
    
} else {
    name = 'hi , girl'
    
} 
document.write ('<h4>'+name+'</h4>')