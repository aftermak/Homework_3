import React from 'react';
import services from '../../../service/todos'

export default function TodoModal({forUpdateTodo, setForUpdateTodo, setUpdatedTodo}) {

  const editTitleTodo = (e) => {
    setForUpdateTodo((actualState) => ({
      ...actualState, title: e.target.value
    }))
  } 

  const handleUpdateItem = async () => {
      const response = await services.post(forUpdateTodo);
      setForUpdateTodo({});
      setUpdatedTodo({
        id: forUpdateTodo.id,
        title: response.title,
      })
  }

  return (
    Object.keys(forUpdateTodo).length ?
      <div className='modal'>
          <h2>Update ToDo</h2>
          <input type='text' defaultValue={forUpdateTodo.title} onChange={(e) => {editTitleTodo(e)}}></input>
          <button type='button' onClick={handleUpdateItem}>Update</button>
      </div> : null
  )
}
