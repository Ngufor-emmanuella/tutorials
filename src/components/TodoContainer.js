/* eslint-disable */
import React from 'react';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Setup my react tutirial template',
          completed: true,
        },
        {
          id: 2,
          title: 'List of shopping items to add to my list',
          completed: false,
        },
        {
          id: 3,
          title: 'Number of items to buy and their varrious brands',
          completed: false,
        },
      ],
    };

    render() {
      return (
        <div>
          <TodosList todos={this.state.todos} />
        </div>
      );
    }
}
export default TodoContainer;
