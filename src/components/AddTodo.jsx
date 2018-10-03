import React, {Component} from 'react'
class AddTodo extends Component {
  render () {
    return (
      <div className='addTodoMain'>
        <div className='panel panel-default col-md-4'>
          <h5 className='panel-heading'>Add New Todo</h5>
          <p className='panel-title'>I want to ...</p>
          <div className='panel-body'>
            <textarea
              type='text'
              autoFocus= 'autofocus'
              // Once the value of the input changes, invoke the handleText function.
              onChange={ this.props.handleText }
              className='create-todo-text'
              placeholder='Enter Task'
              value={ this.props.text }
            />
            {/* The user selects a priority */}
            <h4 type='text'>How much of a priority is this?</h4>
            <select
              placeholder='Select a Priority'
              // Once the value changes, invoke the handle priority function.
              onChange={this.props.changePriority}
              className='create-todo-priority'
            >
              <option value='Select'>Select a priority</option>
              <option value='1'>Low</option>
              <option value='2'>Med</option>
              <option value='3'>High</option>
            </select>
            <div className='panel-footer'>
              <button
                id='add'
                type='button'
                className='create-todo btn btn-success col-md-4'
                // Once the button is clicked, invoke the addItem function
                onClick={this.props.addItem}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddTodo
