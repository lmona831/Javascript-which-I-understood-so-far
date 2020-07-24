// Logical And Operator --> true if both sides are true. False otherwise
//Logical Or Operator ---->true if atleast one side is true, false otherwise
let temp = 65;
if(temp >= 60 && temp <=90 ) {
    console.log('It is really nice out');
}
else if(temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
}
else {
    console.log('Do what you want');
}



let isGuestOneVegan = true;
let isGuestTwoVegan =false;

if(isGuestOneVegan && isGuestTwoVegan ) {
    console.log('Offer both of them vegan dish');
}
else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer one of them the vegan dishes');
}
else {
    console.log('Offer what is there in the menu');
}