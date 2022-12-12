import React from 'react';
import TodoList from './TodoList'

export default function App() {
  // renders TodoList
  // can only return one XML element
  return (
    <TodoList />
    <input type='text' />
  );
};
