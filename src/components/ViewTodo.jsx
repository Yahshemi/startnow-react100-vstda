import React, { Component } from 'react'
import TodoItems from './TodoItems'
class ViewTodo extends Component {
  constructor(props){
   super(props)
   }
  
  render() {
    return (
      <div className='viewTodoMain'>
        <div className='panel panel-default col-md-8'>
          <h5 className='panel-heading'>View Todos</h5>
          <p className='panel-title'>Description</p>
          <div>
            <TodoItems handleDelete={this.props.handleDelete} items={this.props.items} handleChange={this.props.handleChange} saveAndClose={this.props.saveAndClose} />
          </div>
          <div className='container'> </div>
           
        </div>
      </div>
     
    )}
}
export default ViewTodo
