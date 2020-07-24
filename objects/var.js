// Another way of defining a variable by var.
// but we should avoid using var in javascript. var is similar to let in JS.

var firstName = 'Nadia';
firstName = 'John';

var firstName = 'Jen';   // In using let for variable, you cannot reclare like var firstName. In let, you have to use firstName = ''. var is function scope , it is not block scope
console.log(firstName);

if ( 10 === 10) {
    var firstName = 'jen'; // var is accessing in a function but let and const cannot access.
}
console.log(firstName);


// let  and const gives us control in the scope.


const setName = function () {
    var firstName = 'Jen'; 
}
setName();
console.log(firstName);

// var can be defined twice and it is function scope.

// example of weird behaviour by var.

age = 10;
console.log(age)
var age ;

// that is the reason we dont use var.