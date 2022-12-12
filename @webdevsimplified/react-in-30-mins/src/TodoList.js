import React from 'react';
import Todo from './Todo';

// @param
//    todos prop containing Todo objects
export default function TodoList({ todos }) {
  // renders "TODO: Hello, world!"
  return (
    todos.map(
      todo => <Todo todo={ todo } />
    )
  );
};
