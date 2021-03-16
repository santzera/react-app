import { useState } from 'react'

export function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        }
    return(
        <form onSubmit={handleSubmit}>

        <input 
            type="text"
            value={value}
            onChange = {e => setValue(e.target.value)}/>

        </form>
    );
}