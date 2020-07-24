let name = ' Nadia Islam ';

// Length Property

console.log(name.length);

// Convert to UpperCase

console.log(name.toUpperCase());

// Convert to LowerCase
console.log(name.toLowerCase());


// Includes Method

let password = 'abc123pass0893';
console.log(password.includes('password'));

// Trim Method
console.log(name.trim());


//Challenge 
// isValidPassword challenge

let isValidPassword = function (password) {
    // if (password.length > 8 && !password.includes('password')){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return password.length > 8 && !password.includes('password');
}



console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abcqwe!@#%&'));
console.log(isValidPassword('asdfpasdfpoipassword'));

