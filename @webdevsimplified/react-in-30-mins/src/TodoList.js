import React from 'react';

// @param
//    todos prop containing Todo objects
export default function TodoList({ todos }) {
  // renders "TODO: Hello, world!"
  return (
    <div>
      {todos.length} todos received
    </div>
  );
};
