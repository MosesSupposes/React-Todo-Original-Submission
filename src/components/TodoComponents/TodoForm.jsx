import React from 'react'


export default function TodoForm(props) {
    return (
        <form>
            <input type="text" placeholder="Enter your next todo" />
            <button role="submit">+</button>
        </form>
    )
}