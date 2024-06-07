import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo , toUpperCaseConv ,upperAllTask} from "./features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos || []);
    console.log(todos);

    const dispatch=useDispatch();


    const clickHandler=(id)=>{
        console.log("Delete",id);
        dispatch(deleteTodo(id));
    }
    const upperCase=(id)=>{
        dispatch(toUpperCaseConv(id));
    }
    const upperAll=()=>{
        dispatch(upperAllTask());
    }

    return (
        <>
            <AddForm />
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>upperCase(todo.id)}>UpperCase</button>
                    </li>
                ))}
            </ul>
            <hr></hr>
            <button onClick={upperAll}>Uppercase All</button>
        </>
    );
}