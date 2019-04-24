import React from 'react'


export default function Todo(props) {
    return (
        <div className={applyClasses(props.classList)}> 
            <p>{props.content}</p>
        </div>
    )
}


// ---- Helpers ----
function applyClasses(classList) {
    return classList.join(' ')
}

applyClasses(['green', 'large'])