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
      <TodoList todos={ todos } toggleTodo={ toggleTodo } />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearCompleteTodos}>Clear completed Todos</button>
      <div><span>0</span> left to do</div>
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

  function handleClearCompleteTodos(e) {
    // working copy ignoring complete todos
    const newTodos = todos.filter(todo => (!todo.complete));
    // update to working copy
    setTodos(newTodos);
  }

  // toggles the complete checkbox of the todo with given ID
  function toggleTodo(id) {
    // copy the array of a working copy
    const newTodos = [...todos];
    // find the todo with the ID to toggle
    const todo = newTodos.find(todo => (id == todo.id));
    // negate this todo
    todo.complete ^= true;
    // update the todos
    setTodos(newTodos)
  }
};
