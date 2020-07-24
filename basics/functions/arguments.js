
// Multiple arguments
let add = function (a,b,c) {
    return a + b + c;
}

let result = add(10,1,5)
console.log(result);




//Default argument

let getScoreText = function (name = 'anoymonous' , score = 0) {
    //console.log(name);
    //console.log(score);
    return 'Name: '+name+ ' -Score:'+score;
}
//getScoreText();
//getScoreText('Andrew', 35);
let scoreText = getScoreText();
 //scoreText = getScoreText('Andrew');
    scoreText = getScoreText(undefined,99);
console.log(scoreText);





// Tip Calculator

let getTip = function (total,tipPercent = 0.2) {
    return total * tipPercent;
}

let tip = getTip(100,0.25);
console.log(tip);


