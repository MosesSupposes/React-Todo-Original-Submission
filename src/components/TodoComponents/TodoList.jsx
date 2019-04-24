import React from 'react'
import Todo from './Todo'


export default function TodoList(props) {
    return (
        <div className={props.classList}>
            {
                props.todos.map(
                    todo => <Todo 
                                content={todo.task} 
                                classList={todo.classList || 'todo-item'}
                            />
                )
            }
        </div>
    )
}