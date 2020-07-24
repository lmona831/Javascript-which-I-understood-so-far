// Global scope---> (convertFahrenheitToCelcius),tempOne,tempTwo
    // local scope-----> {frenheit,celcius}. Local scope are scopes which are inside a block{}.
    //Local scope (isFreezing)



function convertFahrenheitToCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9;
    //return celcius;

    if(celcius <= 0){
        let isFreezing = true
    }
}

let tempOne = convertFahrenheitToCelcius(32);
let tempTwo = convertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);