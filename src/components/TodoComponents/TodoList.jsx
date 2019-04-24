import React from 'react'
import Todo from './Todo'


export default function TodoList(props) {
    return (
        <div className={props.classList}>
            { (props.label) ? <h2>{props.label}</h2> : null }
            { props.todos.map(todo => 
                <Todo 
                    key={todo.id}
                    content={todo.task} 
                    classList={todo.classList || 'todo-item'}
                />
              )
            }
        </div>
    )
}
