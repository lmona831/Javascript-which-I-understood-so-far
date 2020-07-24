// Object allows us to store related piece of information in a single value.
//example:- note taking applications consist of title and boby. They are both strings
// example:- user is a combination of name, email and password.
//example:- a book consist of title, chapters, page-count etc.


let myBook = {
    title: '1984 ',
    author: 'George Orwell',
    pageCount: 326
}
console.log(myBook);
console.log(myBook.title);
//Another way of getting specific object
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'; // changes actually happen in the object
console.log(myBook);
console.log(`${myBook.title} by ${myBook.author}`);

// Challenge 

let Information = {
    name:'Nadia',
    age:23,
    location:'Dhaka'
}

console.log(Information);
console.log(`${Information.name} is ${Information.age} and lives in ${Information.location}.`);
console.log(`${Information.name} is ${Information.age+1} and lives in ${Information.location}`);
Information.age = Information.age + 1;
console.log(Information);
console.log(`${Information.name} is ${Information.age} and lives in ${Information.location}.`);


