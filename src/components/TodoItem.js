import React from 'react';
import './CSSmodules/Todoitem.css';

class TodoItem extends React.Component {
  render() {
    return <li className="first">{this.props.todo.title}</li>;
  }
}

export default TodoItem;
