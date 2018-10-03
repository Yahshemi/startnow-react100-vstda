import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
         }
        this.handleSave = this.handleSave.bind(this)
        this.updateText = this.updateText.bind(this)
        this.updatePriority = this.updatePriority.bind(this)
        this.passToHandleDelete = this.passToHandleDelete.bind(this)

    }

    isEditingFunc() {
        this.setState({ isEditing: true })
        console.log(this.state.isEditing)
        console.log('is now editing')
    }
    updateText(e) {
        this.setState({ editedText: e.target.value });
        console.log(this.state.editedText);
    }
    updatePriority(e) {
         this.setState({ newPriority: e.target.value })
        console.log('this works')
    }
    handleSave() {
        this.setState({isEditing: false});
        this.props.saveAndClose();
        }
  
    

     passToHandleDelete() {
        this.props.handleDelete();
       } 

    render() {
        return (
            <li>
                {this.state.isEditing ? (
                    <div>
                        <p>Description</p>
                        <textarea className='update-todo-text'
                                  onChange={this.props.handleChange}
                                  name='editedText'
                                  defaultValue={this.props.text}
                                  autoFocus='autofocus'></textarea>
                        <p className='panel-title'>Priority</p>
                        <select className='create-todo-priority'
                            name= 'newPriority'
                            onChange={this.props.handleChange}>
                            <option value='Select' className='create-todo-priority' >Select a priority</option>
                            <option value='1'>Low</option>
                            <option value='2'>Med</option>
                            <option value='3'>High</option>
                        </select>
                        <button
                            id='save'
                            type='button'
                            className='update-todo btn btn-success col-md-4 pull-right' 
                            // Once the button is clicked, invoke the addItem function
                            onClick={this.handleSave}>Save
                        </button>
                    </div>

                ) : (
                        <div
                            className={this.props.priority === '3' ? 'list-group-item list-group-item-danger' :
                                this.props.priority === '2' ? 'list-group-item list-group-item-warning' :
                                    'list-group-item list-group-item-success'}>
                            {this.props.text}
                            {<a className='delete-todo glyphicon glyphicon-trash pull-right ml-4 margin' href='#' onClick={() => this.passToHandleDelete()}></a>}
                            <a className='edit-todo glyphicon glyphicon-edit pull-right ml-4' href='#' onClick={() => this.isEditingFunc()}></a>
                        </div>
                    )
                }


            </li>)
    }
}

export default TodoItem;
