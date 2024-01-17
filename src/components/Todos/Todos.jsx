import React, { useState } from 'react';
import './style.css';

import TodosForm from './TodoForm/TodoForm';
import TodoList from './TodosList/TodoList';


export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  
  return (
    <div className='container'>
        <h1>ToDo List</h1>
        <TodosForm setCreatedTodo = {setCreatedTodo} />
        <TodoList createdTodo = {createdTodo}/>
    </div>
  )
}
