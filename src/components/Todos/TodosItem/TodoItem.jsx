import React from 'react';

export default function TodoItem({user, itemDelete, itemChecked, checked}) {
  return (
    <li>
      <input type='checkbox' onChange={itemChecked} defaultChecked={checked} checked={checked}></input>
      {user.title}
      <button>Edit</button>
      <button onClick={itemDelete}>Delete</button>
    </li>
  )
}
