import React, { Component } from 'react'
import Todo from './Todo'

const initialState = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

// TODO: click handler that sets state of todo item to 'complete'


class App extends Component {
  state = initialState

  render() {
    return (
      <div>
        <h2>Procrastination List</h2>
        

        <h3>Immediately important</h3>
        <h3>Not that important</h3>
        <Todo 
          classList={['green', 'large']}
          content='add click handler that toggles the state of a todo item to "complete"'
        />
      </div>
    )
  }
}

export default App
