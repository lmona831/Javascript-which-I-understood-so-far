let num = 103.941;

console.log(num.toFixed(2));
console.log(num.toFixed(9));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// generating random number between 10 and 20
let min = 10;
let max = 20;
let randomNum = Math.floor (Math.random() * (max-min + 1)) + min;
// the steps that are happening.
// 0 - 0.99---->Math.random
// 0 - 9.99999 ------> * (max - min)
//0 - 10.999999 ------> + 1
//0 - 10 ------->Math.floor
//10 -20--------> + min
console.log(randomNum);



//let randomNum = Math.random();
//console.log(randomNum);


// Challenge Area

let GuessNumber = function(guess) {
    let min =1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return guess === randomNum;
}
console.log(GuessNumber(1));
