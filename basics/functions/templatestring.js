console.log('Nadia' + 'Islam');
let name = 'Nadia'
let age = 23;
console.log(`Hey, my name is ${name} ! I am ${age} years old`);


let getScoreText = function (name = 'anoymonous', score = 0) {
    return `Name: ${name} -Score: ${score}`;
}
scoreText = getScoreText(undefined, 99);
console.log(scoreText);



let getTip = function (total, tipPercent = 0.2) {
    let percent = tipPercent *100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}.`;
}

//let tip = getTip(45,0.25)
let tip = getTip(60);
console.log(tip);
