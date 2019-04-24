import React from 'react'

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

class App extends React.Component {
  state = initialState
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    )
  }
}

export default App
