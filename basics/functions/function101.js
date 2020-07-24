// Functions - input, code, output

let greetUser = function() {
    console.log('Welcome user!');
}

greetUser();
greetUser();
greetUser();


let square = function(num) {
    let result = num * num;
    return result;
}
//let num =3;
let value = square(3);
let otherValue = square(10);
console.log(value);



function convertFahrenheitToCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

let tempOne =convertFahrenheitToCelcius(32);
let tempTwo = convertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);