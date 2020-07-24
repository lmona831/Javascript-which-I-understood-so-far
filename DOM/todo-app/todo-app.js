// Challenge

// DOM manipulations

// remove paragraph containing 'the'

// const paragraph = document.querySelectorAll('p');

// paragraph.forEach(function (paragraph) {
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove();
//     }
// })

// const deletePara = document.querySelectorAll('p');
// deletePara.forEach(function (para) {
//     para.remove();
// })









const todos = [
    {
        text:'Order cat food',
        completed:false
    },

    {
        text:'Clean Kitchen',
        completed:true
    },

    {
        text:'Buy food',
        completed:true
    },

    {
        text: 'Do work',
        completed: false
    },

    {
        text:'Exercise',
        completed:true
    }
]

// Challenge
// 1. Add the todo lists to the browser dynamically.
// 2. create a summary which prints , 'You have 2 todos left to complete' in a paragraph tag
//3. Add a paragraph to text value of todos.

// const incompleteTodos = todos.filter(function (todo) {
//     return !todo.completed;
// })

// const summary = document.createElement('h2');
// summary.textContent = ` You have ${incompleteTodos.length} todos left`;
// document.querySelector('body').appendChild(summary);

// todos.forEach(function (todo) {
//     const p = document.createElement('p');
//     p.textContent = todo.text;
//     document.querySelector('body').appendChild(p);
// })




// Handling User Interaction Challenge

// document.querySelector('button').addEventListener('click', function (e) {
//     console.log('Add a new todo')
// })



// Advanced Queries

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('Add a new todo')
// })



// Text Input and Live Data Filtering

// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value);
// })





//Todo filter Challenge
// 1. Set up a div contains for todos
//2.Setup filters (search-text) and wire up a new filter input to change it
// 3. Create a render todos function to render and rerender the latest filtered data

// const filters = {
//     searchText:''
// }

// const renderTodos = function (todos, filters) {
//     const filteredTodos = todos.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
//     })

//     const incompleteTodos = filteredTodos.filter(function (todo) {
//         return !todo.completed;
//     })

//     document.querySelector('#todos').innerHTML= ' ';

//     const summary = document.createElement('h2');
//     summary.textContent = ` You have ${incompleteTodos.length} todos left`;
//     document.querySelector('#todos').appendChild(summary);

//     filteredTodos.forEach(function (todo) {
//         const p = document.createElement('p');
//         p.textContent = todo.text;
//         document.querySelector('#todos').appendChild(p);
//     })
// }

// renderTodos(todos, filters);

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value;
//     renderTodos(todos,filters);
// })



// Working with Forms challenge
//1. Create a form with a single input for todo text
//2. Setup a submit handler and cancel the default action
//3. Add a new item to the todos array with that text data(completed value of false);
//4.Rerender the applications

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({
        text:e.target.elements.text.value,
        completed:false
    });
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
})





// Checkboxes Challenge
// 1. Create a checkbox and setup event listener -> 'Hide completed'
//2. Create new hideCompleted filter (default false)
//3. Update hideCompleted an rerender list on checkbox change
//4. Setup renderTodos to remove completed items.


const filters = {
    searchText: '',
    hideCompleted:false
}





// const renderTodos = function (todos, filters) {



//     let filteredTodos = todos.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
// })




    // filteredTodos = filteredTodos.filter(function (todo) {
    //     // figure out if the checkbox is checked or not
    //     // if(filters.hideCompleted)  // if it is checked
    //     //  {
    //     //     return !todo.completed; // the list that have not been completed
    //     // }
    //     // else {
    //     //     return true;
    //     // }

    //     // the above code of if and else can be written in one line
    //     return !filters.hideCompleted || !todo.completed;
    //     //the above one line code shows , the checkbox when checked,it hides everything or return todos that have not been completed , that is it will return 'false'.


    // })


    // the filter function on filteredTodos of renderTodods and filterTodos.filter . It is written 2 times, the above code can be shortened.

    const renderTodos = function (todos, filters) {
        filteredTodos = todos.filter(function (todo) {
            const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
            const hideCompleteMatch = !filters.hideCompleted || !todo.completed;

            return searchTextMatch && hideCompleteMatch;
        })
    

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })

    document.querySelector('#todos').innerHTML = ' ';

    const summary = document.createElement('h2');
    summary.textContent = ` You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    })
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})


document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked,  // hideCompleted is true when checkbox is checked.
                                                // hideCompleted is false when checkbox is unchecked.
    renderTodos(todos,filters);
})