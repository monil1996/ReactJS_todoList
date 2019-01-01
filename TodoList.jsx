import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./list.css";

class TodoList extends Component {
  state = {
    items: [],
    item: ""
  };

  addItem = e => {
    var lista = this.state.items;
    lista.push({
      item: this.state.item
    });

    this.setState({
      items: lista,
      item: ""
    });
  };
  deleteItem = key => {
    var nlist = this.state.items.filter(function(cc) {
      return cc.item !== key;
    });

    this.setState({
      items: nlist
    });
  };

  updateValue = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <input
            onChange={this.updateValue}
            id="item"
            value={this.state.item}
            placeholder="enter a unique task"
          />
          <button onClick={this.addItem}>Add Task</button>
        </div>

        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
