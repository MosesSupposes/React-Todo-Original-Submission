import React, { Component } from 'react'

import TodoList from './TodoComponents/TodoList'
import TodoForm from './TodoComponents/TodoForm'

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

const renderTodoList = ({todos=tasks, classes=["todo-item"], label=""}) => (
  <TodoList 
    todos={todos} 
    classList={applyClasses(classes)} 
    label={label} 
  />
)

class App extends Component {
  state = tasks

  render() {
    return (
      <div className="app">
        {/* <TodoList className={'todo-list'} todos={this.state} /> */}
        { renderTodoList({ 
            todos: this.state, 
            label: 'Immediately important' 
          }) 
        }
        
        {/* <TodoList className={'todo-list'} todos={this.state} /> */}
        { renderTodoList({
            todos:this.state.filter(x => x.completed),
            classList:['monkey', 'banana'],
            label: 'Completed'
          })
        }
      </div>
    )
  }
}

export default App
