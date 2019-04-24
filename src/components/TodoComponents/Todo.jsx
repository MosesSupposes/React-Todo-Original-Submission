import React from 'react'


export default function Todo(props) {
    return (
        <div className={props.classList}> 
            <p>{props.content}</p>
        </div>
    )
}