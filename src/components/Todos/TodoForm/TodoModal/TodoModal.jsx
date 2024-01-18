import React, { useState, useEffect } from 'react';
import services from '../../../../services/todos'


export default function TodoModal({isShow}) {
    const [showModal, setShowModal] = useState(false);
    const [updateTodo, setupdateTodo] = useState();

    useEffect (() => {
        setShowModal(isShow)
    },[isShow])

    const handleUpdateItem = async () => {
        const response = await services.post(updateTodo)
        console.log(response.title);
        setShowModal(false);
    }



  return (
    showModal ?
    <div className='modal'>
        <h2>Update ToDo</h2>
        <input type='text' defaultValue={showModal.title} onChange={(e) => {setupdateTodo({title: e.target.value})}}></input>
        <button type='button' onClick={handleUpdateItem}>Update</button>
    </div> : null
  )
}
