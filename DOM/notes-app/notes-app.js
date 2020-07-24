// Manipulating DOM

//  Query and Remove methods.
//   const p = document.querySelector('p');
//   p.remove();
//   console.log(p);



// Query all and remove

// const ps = document.querySelectorAll('p');
// ps.forEach(function (p) {
//     p.remove();
// })


// Query All and textContent

// const ps = document.querySelectorAll('p');
// ps.forEach(function (p) {
//     p.textContent= '******8';
//     console.log(p.textContent);
// })




// Adding Elements via DOM

    // Add a new element

    // const newParagraph = document.createElement('p');
    // newParagraph.textContent ='This is a new element from Javascript';
    // document.querySelector('body').appendChild(newParagraph);
    // console.log(newParagraph);





// Handling User Interactions

// document.querySelector('button').addEventListener('click', function (e) {
//     console.log('Did this work');
//     console.log(e);
//     e.target.textContent = 'Create button is clicked';
// })






// Advanced Queries

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'Create button is clicked';
})

// document.querySelector('#remove-note').addEventListener('click', function (e) {
//     e.target.textContent = 'Remove button is clicked';
//     document.querySelectorAll('.note').forEach (function (note) {
//         note.remove();
//     })
// })


// ---- Single ------
// p
// #replace
//.item

//-----Multiple-----
//p#order
//button.inventory
//h1#title.application
// h1.application#title





// Text Inputs and live data filtering.

// the 'change' event is not favorable when you want to filter in real time.
// document.querySelector('#search-text').addEventListener('change', function (e) {
//     console.log(e);
//     console.log(e.target.value);
// })

//the alternative is 'input'event and helps us to acces in real time and also filter them
// document.querySelector('#search-text').addEventListener('input', function (e) {
//     //console.log(e);
//     console.log(e.target.value);
// })







// Rendering Our Filtered Data in our notes list

const notes = [
    {
        title:'My next trip',
        body:'I would like to go to Spain'
    },

    {
        title:'Habbits to work on ',
        body: 'Exercise. Eating a bit better'
    },

    {
        title:'Office modification',
        body:' Get a new seat'
    }
]

const filters = {
    searchText: ' '
}

const renderNotes = function (notes, filter) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    //console.log(filteredNotes);
    document.querySelector('#notes').innerHTML=" ";
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
})





// Working with Forms

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     //cancelling default behaviour of the form, see the code below:
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     //clear the form field , see the code below:
//     e.target.elements.firstName.value = '';
// })




//Checkboxes 

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     console.log(e.target.checked); // will return true, if checked and false if undchecked.
// })




// Dropdowns

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})


