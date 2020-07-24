let temp = 82;
let isFreezing = temp <= 32;

//if(true){}, the code will always run.
// if(false){}, the code will never run.

if (isFreezing) {
    console.log('It is freezing outside!');
}

if(temp >= 110) {
    console.log('It is way to hot');
    console.log('Testing 1,2,3');
}



let age = 65;

if(age <= 7) {
    console.log('child pricing');
}

if(age >= 65) {
    console.log('senior discount');
}


let isAccountLocked = false;
let userRole = 'admin'


if(isAccountLocked) {
    console.log('Is account locked');
}
else if(userRole === 'admin') {
    console.log('Welcome Admin');
}
else {
    console.log('Welcome');
}





let temp1 =45;

if (temp1 <= 32) {
    console.log('It is freezing outside');
}
else if(temp1 >=110) {
    console.log('It is hot outside');
}
else {
    console.log('It is a fine weather');
}