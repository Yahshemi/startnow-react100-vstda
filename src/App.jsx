import React, { Component } from "react";
import TodoItems from "./components/TodoItems";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import ViewTodo from "./components/ViewTodo";

// Sets the initial state.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checked: false,
      text: "",
      priority: 0,
      newPriority: 0,
      editedText: "",
      items: []
    };
    // Binds events to 'this', which refers to App.
    this.addItem = this.addItem.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleUpdating = this.handleUpdating.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.saveAndClose = this.saveAndClose.bind(this);
  }
  // The following code are the methods that runs when an event occurs.

  handleUpdating(e) {
    console.log("I  am being updated");
    this.setState({ text: e.target.value });
  }
  updateTodo(key, input, priority) {
    console.log("You Clicked Save");

    const newList = [...this.state.items];
    const newTodo = {
      key,
      input,
      priority
    };
    newList.splice(index, 1, newTodo);

    this.setState({ list: newList });
  }
  handleChange(e) {
    console.log("you changed something");
    this.setState({ [e.target.name]: e.target.value });
  }
  handleText(e) {
    this.setState({ text: e.target.value });
  }
  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }
  addItem() {
    if (this.state.text !== "") {
      const newItem = {
        text: this.state.text,
        key: Date.now(),
        priority: this.state.priority,
        textEditing: ""
        // *Needs a conditional saying that if no priority is selected, return 1
        // if this.state.priority = 0
      };

      //  Sets the state of the input to the new input, and gives it an individual value.
      //  prevState argument gives us the value of our state object before this point in time.
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem),
          text: ""
        };
      });
    }
  }
  saveAndClose(item) {
    console.log("Blah, Blah, Blah");
    item.text = this.state.editedText;
    item.priority = this.state.newPriority;
    this.setState({
      isEditing: false,
      items: this.state.items
    });
  }
  handleDelete(itemToBeDeleted) {
    console.log("Hey you clicked delete", itemToBeDeleted);
    // console.log(this.state.items);
    var newItems = this.state.items.filter(_item => {
      return _item !== itemToBeDeleted;
    });
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div className="AppMain">
        <div className="container">
          <div className="title-div">
            <h1>Not So Simple Todo App </h1>
            <h5>Track all of the things</h5>
            <div>
              <img
                className="clipboard-img"
                src={"https://image.flaticon.com/icons/svg/1695/1695141.svg"}
                alt="clipboard-img"
              />
            </div>
            <hr />
          </div>
          {/* This calls the child component AddTodo and says, when the text changes, run handleText. */}
          <AddTodo
            handleText={this.handleText}
            changePriority={this.handlePriority}
            addItem={this.addItem}
            text={this.state.text}
          />
          <ViewTodo
            items={this.state.items}
            handleDelete={this.handleDelete}
            handleChange={this.handleChange}
            updateTodo={this.updateTodo}
            handleUpdating={this.handleUpdating}
            saveAndClose={this.saveAndClose}
          />
          {/* <TodoItem saveAndClose={this.saveAndClose} /> */}
        </div>
        <div className="credits">
          Icons made by{" "}
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default App;
