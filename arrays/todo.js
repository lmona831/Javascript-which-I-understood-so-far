//const todos = ['waking up','Praying','Exercise','Clean','Finish Javascript'];
//console.log(`You haves ${todos.length} todos!`);
// console.log(`Todo:${todos[0]}`);
// console.log(`Todo:${todos[todos.length-2]}`);


//Challenge 1
// todos.splice(2,1);
// console.log(todos);
// todos.push('Drink a coffee');
// todos.shift();
// console.log(`You have ${todos.length} todos task!`);
// console.log(todos);


// todos.forEach(function(tasks,index){
//     const num = index + 1;
//     console.log(`${num}: ${tasks}`);
// })

//callback functions better tell talk about a program. It is a function inside a function.


//The for loop
// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1;
//     const todo = todos[count];
//     console.log(`${num}: ${todo}`);
// }








// Challenge 2

//1. Convert array to array of objects --> text,, completed
//2. create function function to remove a todo by text value.
// delete toDo(todos,'buy food')


//const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];

// const todos = [
//     {
//         text:'Order cat food',
//         completed:true
//     },

//     {
//         text:'Clean Kitchen',
//         completed : false
//     },
//     {
//         text:'Buy food',
//         completed:true
//     },

//     {
//         text: 'Do work',
//         completed:false
//     },

//     {
//         text: 'Exercise',
//         completed: true
//     }
// ]

// const deleteTodo = function (todos, toDoText) {
//     const index = todos.findIndex(function(todo){
//         return todo.text.toLowerCase() === toDoText.toLowerCase();
//     })
//     if ( index > -1) {
//         todos.splice(index,1);
//     }
// }


// deleteTodo(todos, 'buy food');
// console.log(todos);










// Challenge is to filter what is complete:false


// const todos = [
//     {
//         text:'Order cat food',
//         completed:true
//     },

//     {
//         text:'Clean Kitchen',
//         completed : false
//     },
//     {
//         text:'Buy food',
//         completed:true
//     },

//     {
//         text: 'Do work',
//         completed:false
//     },

//     {
//         text: 'Exercise',
//         completed: true
//     }
// ]

// const getThingsTodo = function(todos) {
//     return todos.filter(function (todo){
//         //return todo.completed === false;
//         //The above code return todo.completed === false can be also returned as !todo.completed
//         return !todo.completed;
//     })
// }

// console.log(getThingsTodo(todos));








// Challenge is sorting todo list


const todos = [
    {
        text: 'Order cat food',
        completed: true
    },

    {
        text: 'Clean Kitchen',
        completed: false
    },
    {
        text: 'Buy food',
        completed: true
    },

    {
        text: 'Do work',
        completed: false
    },

    {
        text: 'Exercise',
        completed: true
    }
]


const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        // 'a' is not completed but 'b' is completed
        //if (a.completed === false && b.completed === true) can be written as : see the code below
        if(!a.completed && b.completed){
            return -1
        }
        else if (!b.completed && a.completed) {
            return 1
        }
        else {
            return 0;
        }
    })
}

sortTodos(todos);
console.log(todos);