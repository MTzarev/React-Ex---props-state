import TodoList from "./TodoList";
function TodoListItems (props) {

    return(
<li>{props.children}</li>
    );
}
export default TodoListItems;