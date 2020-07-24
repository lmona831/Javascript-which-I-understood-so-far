//undefined for variables

let name; // the variable 'name' is not assigned a value
//console.log(name);
// undefined is used to express the absence of a value. It is implicitly done by javascript if we do not assign a value.

//name = 'Nadia';
if (name === undefined) {
    console.log('Please provide a value');
}
else {
    console.log(name);
}



// undefined for functions arguments.
// undefined for function return value.

//javascript will set num to undefined because you did not pass the value.
let square = function (num) {
    console.log(num);
}
//square();
//square(3);
let result = square();
console.log(result);




// Null as an assigned value. Implicit by Javascript.

let age =23;
//age = undefined; // if you want to clear the value of age, we explicitly define 'undefined' for 
                //variable 'age'. It is explicitly cleared by us(developers).
//another way of doing clearing the value of age is assigning null
age = null;

console.log(age);