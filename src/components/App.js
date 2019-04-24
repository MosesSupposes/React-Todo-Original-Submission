import React, { Component } from 'react'
import TodoList from './TodoComponents/TodoList'

import { applyClasses } from '../helpers'


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Dynamically render todo items',
    id: 2,
    completed: true
  }
]
  

// TODO: click handler that sets state of todo item to 'complete'

const renderTodoList = ({todos=tasks, classes=["todo-item"]}) => (
  <TodoList todos={todos} classList={applyClasses(classes)} />
)

class App extends Component {
  state = tasks

  render() {
    return (
      <div>
        <h2>Procrastination List</h2>
        

        <h3>Immediately important</h3>
        {/* <TodoList className={'todo-list'} todos={this.state} /> */}
        { renderTodoList({ todos: this.state }) }
        
        <h3>Completed</h3>
        {/* <TodoList className={'todo-list'} todos={this.state} /> */}
        {renderTodoList({todos:this.state.filter(x => x.completed), classList:['monkey', 'banana']})}
      </div>
    )
  }
}

export default App
