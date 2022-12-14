import React from 'react';
// for the TODO list items
import Todo from './Todo';

// @param
//    todos prop containing Todo objects
export default function TodoList({ todos, toggleTodo }) {
  // renders "TODO: Hello, world!"
  return (
    todos.map(todo =>
      <Todo key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
    )
  );
};
