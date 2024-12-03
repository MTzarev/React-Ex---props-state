import TodoListItems from "./TodoListItems";
import {useState} from "react";

function TodoList(){
let [tasks, setTasks] = useState([]);
let [task, setTask] = useState('');

let inputChangeHandler = (e)=>{
    setTask(e.target.value);
}
let addTaskClick = ()=> {
   
    setTasks([...tasks, task]);
    setTask(``);
}
    return(
<>
<input type="text" value={task} onChange={inputChangeHandler} placeholder="Write a new task:" /> 
<button onClick={addTaskClick}> Submit</button>
<ul>
    {tasks.map((tasks)=>(
        <li key={tasks}>{tasks}</li>
    ))}
   
    
</ul>

</>
    );
}
export default TodoList;