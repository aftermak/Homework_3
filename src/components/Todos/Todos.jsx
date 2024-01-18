import React, { useState } from 'react';
import './style.css';

import TodosForm from './TodoForm/TodoForm';
import TodoList from './TodosList/TodoList';
import TodoModal from './TodoForm/TodoModal/TodoModal';


export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [isShow, setisShow] = useState();
  const [updateTodo, setUpdateTodo] = useState({});
  
  return (
    <div className='container'>
        <h1>ToDo List</h1>
        <TodoModal isShow = {isShow}/>
        <TodosForm setCreatedTodo = {setCreatedTodo} />
        <TodoList createdTodo = {createdTodo} setisShow={setisShow}/>
    </div>
  )
}
