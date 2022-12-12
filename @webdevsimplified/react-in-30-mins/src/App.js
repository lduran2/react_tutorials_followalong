import React, { useState, useRef } from 'react';
import TodoList from './TodoList'

export default function App() {
  // destructure useState
  const [
    // each todo
    todos,
    // for updating todos
    setTodos
  ] =
    // default App state to empty list
    useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (''===name) return;
    console.log({'name': name})
  }

  // renders TodoList
  // can only return one XML element
  // sending todos as a prop for TodoList
  return (
    <>
      <TodoList todos={ todos } />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed Todos</button>
      <div><span>0</span> left to do</div>
    </>
  );
};
