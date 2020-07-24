let myBook = {
    title: '1984 ',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples hisory ',
    author: 'Howard Zimm',
    pageCount: 723
}

// let getSummary = function(book){
//     console.log(`${book.title} by ${book.author}`)
// }


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
// getSummary(myBook);
// getSummary(otherBook);


let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);


// Challenge

let convertFahrenheit = function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        kelvin:(fahrenheit + 459.67),
        celcius: (fahrenheit -32) * (5/9)
    }
}

let temps = convertFahrenheit(745);
console.log(temps);