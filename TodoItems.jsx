import React, { Component } from "react";
import Flip from "react-flip-move";

class TodoItems extends Component {
  createTasks = x => {
    return (
      <li key={x.item} onClick={() => this.delete(x.item)}>
        {x.item}
      </li>
    );
  };

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <Flip duration={350} easing="ease-out">
          {listItems}
        </Flip>
      </ul>
    );
  }
}

export default TodoItems;
