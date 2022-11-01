import React, { Component } from 'react'
import TodoItems from './TodoItems'

class ViewTodo extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='view-todo' className="viewTodoMain">
        <div className="panel panel-default col-md-8 display-container">
          <h5 className="panel-heading">View Todos</h5>
          <div>
            <TodoItems
              handleDelete={this.props.handleDelete}
              items={this.props.items}
              handleChange={this.props.handleChange}
              saveAndClose={this.props.saveAndClose}
            />
          </div>
          <div className="container"> </div>
        </div>
      </div>
    )
  }
}
export default ViewTodo
