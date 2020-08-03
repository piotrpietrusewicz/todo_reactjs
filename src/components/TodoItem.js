import React from 'react';

var classNames = require('classnames');

const TodoItem = props => {

  var divClass = classNames({
    card: true,
    completed: props.element.isCompleted
  });

  return (
    <div className={divClass} key={props.element.id}>
      <h2> {props.element.title} </h2>
      <button onClick={() => props.markClicked(props.element.id)}>Terminate</button>
    </div>
  )
}

export default TodoItem;
