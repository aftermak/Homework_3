import React, { useState } from 'react';
import './style.css';

import TodosForm from './TodoForm/TodoForm';
import TodoList from './TodosList/TodoList';
import TodoModal from './TodoModal/TodoModal';
import ColorPicker from '../ColorPicker/ColorPicker';
import ProgressBar from '../ProgressBar/ProgressBar';
import Filter from '../Filter/Filter';


export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [forUpdateTodo, setForUpdateTodo] = useState({});
  const [updatedTodo, setUpdatedTodo] = useState();
  const [color, setColor] = useState('#000000');
  const [todosFilter, setTodosFilter] = useState('all');
  const [progress, setProgress] = useState([]);

  return (
    <div className='container'>
        <h1>ToDo List</h1>
        <TodoModal forUpdateTodo = {forUpdateTodo} setUpdatedTodo={setUpdatedTodo} setForUpdateTodo={setForUpdateTodo}/>
        <TodosForm setCreatedTodo = {setCreatedTodo} />
        <ColorPicker color={color} setcolor={setColor} />
        <ProgressBar progress={progress}/>
        <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter} />
        <TodoList createdTodo = {createdTodo} updatedTodo={updatedTodo} setForUpdateTodo={setForUpdateTodo} color={color}
          todosFilter={todosFilter} setTodosFilter={setTodosFilter} setProgress={setProgress} />
    </div>
  )
}
