import React, { useState } from 'react';
import TodoList from './TodoList'

export default function App() {
  // destructure useState
  const [
    // each todo
    todos,
    // for updating todos
    setTodos
  ] =
    // default App state
    // test with 2 Todos
    useState(['Todo 1', 'Todo 2'])
  // renders TodoList
  // can only return one XML element
  // sending todos as a prop for TodoList
  return (
    <>
      <TodoList todos={ todos } />
      <input type='text' />
      <button>Add Todo</button>
      <button>Clear completed Todos</button>
      <div><span>0</span> left to do</div>
    </>
  );
};
