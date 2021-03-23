export function TodoItem({todo, index, removeTodo, completeTodo}){
    return(
        <div style={{text-decoration: todo.isCompleted ? "Line-through" : ""}}>
            {todo.text}
            <button onClick={()=> removeTodo(index)}> X </button>
            <button onClick={()=> completeTodo(index)}>Terminada</button>

        </div>
    );
}