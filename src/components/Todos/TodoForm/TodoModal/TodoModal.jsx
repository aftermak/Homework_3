import React, { useState, useEffect } from 'react';
import services from '../../../../services/todos'


export default function TodoModal({forupdateTodo, setforupdateTodo, setupdatedTodo}) {

    const editTitleTodo = (e) => {
      setforupdateTodo((actualState) => ({
        ...actualState, title: e.target.value
      }))
    } 

    const handleUpdateItem = async () => {
        const response = await services.post(forupdateTodo);
        setforupdateTodo({});
        setupdatedTodo({
          id: forupdateTodo.id,
          title: response.title,
        })
    }

  return (
    Object.keys(forupdateTodo).length ?
      <div className='modal'>
          <h2>Update ToDo</h2>
          <input type='text' defaultValue={forupdateTodo.title} onChange={(e) => {editTitleTodo(e)}}></input>
          <button type='button' onClick={handleUpdateItem}>Update</button>
      </div> : null
  )
}
