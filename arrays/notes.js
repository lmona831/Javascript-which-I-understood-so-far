// Introduction to array
// Array allows us to store a list of values.
//it can used to store list of numbers, strings or objects.
// In software development,any applications you use example a list of messages, weather app gives a list of locations and temperatures. netflix gives us a list of show to watch from
// common examples are list app or to-do app or notes app.










// creating a notes app using an array.

//const notes = ['Note 1','Note 2', 'Note3'];
// creating objects in the list 
// const notes = [
//     {  },
//     {
//     title:'My next trip',
//     body:'I would like to go to Spain'
// },
// {
//     title:'Habbits to work on',
//     body:'Exercise.Eating a bit better'
// },
// {
//     title:'Office Modification',
//     body:'Get a new seat'
// }];
// console.log(notes);
// console.log(notes.length);
// console.log(notes[1]);
// console.log(notes[notes.length-1]);// to get the last items from the list.









// Manipulating arrays with methods.


//notes.pop();// delete the last list items from the list.
//console.log(notes.pop()); //if you need to show what you have deleted , just console.log it
// notes.push('Your new notes');
// notes.shift(); // it removes the first item from your array.
//notes.unshift('My first notes'); // adding list item on the beginning of an array.


//notes.splice(1,0,'This is the new second item'); // start at index of 1 and remove 0 item and add in the next postion 'This is the new item
//notes.splice(1, 1, 'This is the new second item'); //start at index 1 and remove 1 item and replace it by 'This is the new item';
//Similar to splice method above, you can also write it like this below:
// notes[2] = 'This is the new second item';

// console.log(notes.length);
// console.log(notes);






//Looping over arrays

//notes[2] = 'This is now the new note3';

//const doThis = function (){console.log('testing 123');}
//notes.forEach(doThis);
// These above functions can be written in single line given below using forEach method:

// notes.forEach(function (){
//     console.log('testing 123')
// })      // A callback is nothing but a function that is passed through a function.


// function is running three times as there are 3 items in the notes or list and also you can access the three items.You are referencing to the items in the notes.
// notes.forEach(function (items) {
//     console.log(items);
// }) 


// You can also access position or index along with items in the notes similar to above code:see above
// notes.forEach(function (items,index) {
//     console.log(index);
//     console.log(items);
// }) 
// console.log(notes.length);
// console.log(notes);










// The For loop
// it is an alternative mechanism to forEach function.


// counting ...1
// for(let count = 0; count<= 2; count++) {
//     console.log(count)
// }

// for (let count= notes.length; count >=0; count--) {
//     console.log(notes[count]);
// }







//Searching in an array part 1

// console.log(notes.indexOf('Note 2')); // returns position of an array, item is found
// console.log(notes.indexOf('note 2'));// item is not found.






// Searching in an array with objects.

// console.log(notes);
// console.log(notes.length);

//console.log(notes.indexOf({})); // we notice in the output when we run the script, it gives us 
                                // -1, when we use indexOf({}), we search for {}, it is present but it 
                                // gives us -1 telling us it is not present.
                                // The reason is it has to do something with referencing in JS.
                                // when an object is pointed, if one thing is changed, the change is also
                                // made in the main object. so , when indexOf function is applied, it goes
                                // from beginning to last.To better understand this, please see the code below , console.log({} === {}).
                                
//console.log({} === {});          // so, here we see,it gives us false. When comparing objects,it does not
                                //matter when the objects has same set of object properties or object values. thats why it returns false.


// In the above code snippet, you got false. So, to make it true, we will use referencing.See the code below:
// let someObj = { };
// let otherObj = someObj;
// console.log(someObj === otherObj); // it returned us true
                                    // the explanation is it does not matter if both different objects have the exact same object properties or exact same object values.
                                    // the reason, it returned true because, the other object is pointing to the same memory. And also, the object is equal to other same object(see in line 142 code).

// Array of objects are super popular method but cannot use indexOf() to find {} in notes list, because Javascript has specifically designed method to find {} in the object list.
//In the inner working of indexOf, indexOf use '===' to search for an item in the array.






// Alternative to indexOf(), it will work similar to indexOf()
// const index = notes.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'Habbits to work on';

// } ) 
// console.log(index);









// Searching array part 2

const notes = [
    
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },

    {
        title: 'Habbits to work on',
        body: 'Exercise.Eating a bit better'
    },

    {
        title: 'Office Modification',
        body: 'Get a new seat'
    }];




// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note , index) {
//         //return note.title === noteTitle;
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//         return notes[index];
// }

//const note = findNote(notes, 'Office Modification');  -----> output will be returned
// const note = findNote(notes, 'office Modification'); ------> output will be undefined

// In the above code, where the output is undefined because of 'office modication', we want it to return a value instead of undefined due to simple 'o' replacing with 'O'. office modication to Office Modication , which is the same!. 
//We want to avoid to case like uppercase and lower case and give the value.
// the solution is ,  in the findNote function convert the notetitle to either uppercase or lowercase;
//lowercase ---> note.title.toLowerCase() === noteTitle.toLowerCase() or uppercase ----> note.title.toUpperCase() ==== noteTitle.toUpperCase().
// This will help us to ignore case sensitiveness and return us the value.





// Using find method instead of findNote method, find method works prettymuch the same as findNote method.
// it will be similar to above codes of findNote function but a little modification


// const findNote = function (notes, noteTitle) {
//     const note = notes.find(function (note, index) {
//         //return note.title === noteTitle;
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return note;
// }


// The above code can be shortened by putting 'return' before const note.
// const findNote = function (notes, noteTitle) {
//     //notes.push('it is a long process, get used to it!');
//     //console.log(notes)
//     return  notes.find(function (note, index) {
//         //return note.title === noteTitle;
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })

// }

// const note = findNote(notes, 'office modification')
// console.log(note);











// Filtering array


//query is search text
// const findNotes = function (notes,query) {
//     return notes.filter(function (note, index) {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase()); //query.toLower() is used to make the seach case sensitive
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//         return isTitleMatch || isBodyMatch;
//     })
//     //return filteredNotes; ----> it is made redundant. put return before const filteredNotes
// }

// console.log(findNotes(notes, 'work'));



// const filteredNotes = notes.filter(function(note,index) {
//     // return false; ---->no notes are considered a match, it will return an empty object
//     // return true; -----> notes are considered a match
//     const isTitleMatch = note.title.toLowerCase().includes('office');
//     const isBodyMatch = note.body.toLowerCase().includes('office');
//     return isTitleMatch || isBodyMatch;
// })
//console.log(filteredNotes);












//Sorting Arrays


// function(a,b) is a sort comparitor in sorting array. 'a' and 'b' are both objects pointing to notes list
// console.log('a' < 'A');
// const sortNotes = function (notes) {
//     notes.sort(function (a,b) {
//         // if 'a' object comes first that is before 'b' object, return -1
//         if(a.title.toLowerCase() < b.title.toLowerCase()){
//             return -1
//         }
//         // if 'b' objects come first that is before 'a' object, return 1
//         else if(b.title.toLowerCase() < a.title.toLowerCase()){
//             return 1
//         }
//         // 'a' object and 'b' object are identical
//         else{
//             return 0;
//         }
//     })
// }
// sortNotes(notes); // the notes list are sorted.
// console.log(notes);










