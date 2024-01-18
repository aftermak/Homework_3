import React, { useState } from 'react';
import { v4 } from 'uuid';
import services from '../../../services/todos';

export default function TodosForm({setCreatedTodo}) {
  const iD = v4();

  const [newTodo, setNewTodo] = useState({
    id: iD,
    title: 'Your text',
    completed: false,
  });

  const handleTitle = (event) => {
    setNewTodo((actualState) => ({ ...actualState, title: event.target.value, id: iD }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await services.post(newTodo);
    setCreatedTodo(response);
    setCreatedTodo((actualState) => ({...actualState, id:iD}) )
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >
                Your New ToDo
                <input type="text" onChange={handleTitle} />
            </label>
            <button>Create New ToDo</button>
        </form>
    </div>
  )
}
