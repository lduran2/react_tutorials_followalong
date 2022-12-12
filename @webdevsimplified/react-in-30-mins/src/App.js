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
    useState([]);
  // reference to input for adding a todo
  const todoNameRef = useRef();

  // renders TodoList
  // can only return one XML element
  // sending todos as a prop for TodoList
  return (
    <>
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed Todos</button>
      <div><span>0</span> left to do</div>
      <TodoList todos={ todos } />
    </>
  );

  // event handler for adding a new todo
  function handleAddTodo(e) {
    // fetch the name
    const name = todoNameRef.current.value;
    // do nothing if empty name
    if (''===name) return;
    // otherwise log the name
    console.log({'name': name});
    // and add it to the todos
    setTodos(prevTodos =>
      [
        ...prevTodos,
        {
          "id": prevTodos.length,
          "name": name,
          "complete": false
        }
      ]
    );
    // reset the name in the input
    todoNameRef.current.value = null;
  }
};
