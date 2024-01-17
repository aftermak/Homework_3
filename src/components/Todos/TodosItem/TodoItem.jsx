import React from 'react';

export default function TodoItem({user}) {



  return (
    <li>
      <input type='checkbox'></input>
      {user.title}
      <button>Edit</button>
      <button>Delete</button>
    </li>
  )
}
