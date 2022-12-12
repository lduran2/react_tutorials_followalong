import React from 'react';
import TodoList from './TodoList'

export default function App() {
  // renders TodoList
  // can only return one XML element
  return (
    <>
      <TodoList />
      <input type='text' />
      <button>Add Todo</button>
      <button>Clear completed Todos</button>
      <div><span>0</span> left to do</div>
    </>
  );
};
