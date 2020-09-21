import React from 'react';
import './Todo.css';

export default function Todo(props) {
  return (
      <div
      className={`item${props.todo.selected ? " selected" : ""}`}
       onClick={(e) => props.toggle(props.todo.id)}>
          {props.todo.item}
      </div>
  )
} 