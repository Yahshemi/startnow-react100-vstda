import React, { Component } from 'react'
import TodoItem from './TodoItem'

// Create a TodoItems Component, where the user will view the Todos.
class TodoItems extends Component {
  constructor(props) {
   super(props)
}
  render() {
    
    return (
      <ul className='theList li list-group' >
        {this.props.items.map(todo => <TodoItem text={todo.text} key={todo.key} priority={todo.priority} handleChange={this.props.handleChange} handleDelete={() => this.props.handleDelete(todo)} saveAndClose={()=> this.props.saveAndClose(todo)}/>)}

      </ul>
      
    )
  }
}
export default TodoItems
