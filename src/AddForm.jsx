import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask]=useState("");
    const dispatch=useDispatch();

    const submitHandler=(evt)=>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };

    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={(evt)=>setTask(evt.target.value)}></input>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button>Add Task</button>
        </form>
        </>
    )
}

//Dispatching Action :
//Triggering a state change

// The useDispatch hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.
// The useDispatch hook returns a reference to the dispatch function from the Redux store. You can use it.

// The useSelector hooks allow you to extract data or the state from the redux store using selector function.
// The useSelector hook returns the selected state from the Redux store. You can use it.
