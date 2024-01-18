import React, { useState } from 'react';
import './style.css';

import TodosForm from './TodoForm/TodoForm';
import TodoList from './TodosList/TodoList';
import TodoModal from './TodoForm/TodoModal/TodoModal';


export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [forupdateTodo, setforupdateTodo] = useState({});
  const [updatedTodo, setupdatedTodo] = useState();

  
  
  return (
    <div className='container'>
        <h1>ToDo List</h1>
        <TodoModal forupdateTodo = {forupdateTodo} setupdatedTodo={setupdatedTodo} setforupdateTodo={setforupdateTodo}/>
        <TodosForm setCreatedTodo = {setCreatedTodo} />
        <TodoList createdTodo = {createdTodo} updatedTodo={updatedTodo} setforupdateTodo={setforupdateTodo}/>
    </div>
  )
}
