import React from 'react';

export class TodoItem extends React.Component {

  onClickDeleteLink(e) {
    e.preventDefault();

    this.props.deleteTodo(this.props.id);
  }

  render() {
      return <li>
        <span>{this.props.title}</span>
        <a href="#"
          onClick={(e) => this.onClickDeleteLink(e)}
        >削除</a>
      </li>;
  }
}
