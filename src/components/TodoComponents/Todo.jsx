import React from 'react'


export default function Todo(props) {
    
    const handleClick = (e) => {
        props.completed = !props.completed
    }

    return (
        <div className={props.classList} onClick={handleClick}> 
            <p>{props.content}</p>
        </div>
    )
}