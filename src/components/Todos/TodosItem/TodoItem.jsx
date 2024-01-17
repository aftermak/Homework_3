import React from 'react';

export default function TodoItem({user, clickFn}) {

  return (
    <li>
      <input type='checkbox'></input>
      {user.title}
      <button>Edit</button>
      <button onClick={clickFn}>Delete</button>
    </li>
  )
}
