import { createSlice, nanoid } from '@reduxjs/toolkit'
//createSlice: A function from Redux Toolkit that helps to create a Redux slice.
//nanoid: A function to generate unique IDs for new todos.


//initialState: An object defining the initial state of the slice. It contains a todos array with a sample todo item.
const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }]
};

//name: The name of the slice, typically corresponding to the domain or feature this slice is responsible for.
//initialState: The initial state of the slice, which we defined earlier.
//reducers: An object defining the reducer functions to handle different actions.
export const todoSlice = createSlice({
    name: "todo",   //name is same as directory name 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            //State: It is an Object and Represents the current state of the part of the Redux store that the slice manages.Includes todos Array.
            //When the reducer function is called, the state parameter contains the current state before the reducer logic is applied.

            //action: Action: Contains the type of action and any additional data (payload) needed for that action.
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo); //direct mutation -> we are not using spread operator like we used in React
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
                return todo;
            });
        },
        toUpperCaseConv: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id == action.payload)
                    todo.task = todo.task.toUpperCase();
                return todo;
            })
        },
        upperAllTask: (state, actions) => {
            state.todos = state.todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            });
        }
    },
})

export const { addTodo, deleteTodo, markAsDone, toUpperCaseConv, upperAllTask } = todoSlice.actions;
export default todoSlice.reducer;
//todoSlice.reducer: This is the reducer function created by createSlice in the todoSlice