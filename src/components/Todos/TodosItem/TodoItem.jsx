import React from 'react';

export default function TodoItem({user, itemDelete, itemChecked, itemUpdate, checked}) {
  return (
    <li>
      <input type='checkbox' onChange={itemChecked} checked={checked}></input>
      {user.title}
      <button onClick={itemUpdate}>Edit</button>
      <button onClick={itemDelete}>Delete</button>
    </li>
  )
}
