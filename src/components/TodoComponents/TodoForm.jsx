import React, { useState } from 'react'


export default function TodoForm(props) {
    const [currentText, setCurrentText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        
        // props.addTodo({
        //     task: currentText,
        //     completed: false
        //     // id gets automatically generated inside TodoList Helper
        // })
        
    }

    const handleChange = e => {
        setCurrentText(e.target.value)
        console.log(currentText)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter your next todo" 
                onChange={handleChange}
                value={currentText}
            />
            <button role="submit">+</button>
        </form>
    )
}
