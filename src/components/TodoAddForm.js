import React from 'react';

export class TodoAddForm extends React.Component {
  onChangeInput(e) {
    this.inputValue = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addTodo(this.inputValue);
  }

  render() {
      return <form onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" onChange={(e) => this.onChangeInput(e)} />
        <input type="submit" value="Add" />
      </form>;
  }
}
