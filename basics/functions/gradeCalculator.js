// Student score, total possible score
///15/20 ---> You got a C
// A 90-100, B 80 - 89, C 70-79, D 69-69, F 0-59

let gradCalc = function (score,totalScore) {
    let percent = (score/totalScore)*100;
    let letterGrade = ' ';

    if (percent >= 90){
        letterGrade = 'A';

    }
    else if(percent >= 80){
        letterGrade = 'B';
        
    }
    else if (percent >= 70) {
        letterGrade = 'C';
    }

    else if (percent >= 60) {
        letterGrade = 'D';
        
    }
    else {
        letterGrade = 'F'
    }
    
    return `You got ${letterGrade} (${percent})`; 
        
}



let result = gradCalc(15,20);
console.log(result);