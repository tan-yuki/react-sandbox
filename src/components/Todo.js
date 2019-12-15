import React from 'react';
import {TodoAddForm} from './TodoAddForm';
import {TodoItem} from './TodoItem';

export class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: '牛乳を買う',
          done: false
        },
        {
          id: 2,
          title: '醤油を買う',
          done: false
        },
        {
          id: 3,
          title: 'スプラトゥーン2を買う',
          done: false
        },
      ],
    };
  }

  addTodo(title) {
    let maxId = this.state.todos.reduce((max, todo) => Math.max(max, todo.id), 0);

    let newTodo = {
      id: maxId + 1,
      title: title,
      done: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  }

  render() {
    let items = this.state.todos.map((todo) => {
      return <TodoItem
        key={todo.id}
        title={todo.title}
        id={todo.id}
        deleteTodo={(id) => this.deleteTodo(id)}
      />;
    });

    return (<div>
      <TodoAddForm addTodo={(title) => this.addTodo(title)} />
      <ul>{items}</ul>
    </div>);
  }
}
