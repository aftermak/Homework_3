import React, { useState, useEffect } from 'react';
import TodoItem from '../TodosItem/TodoItem';
import services from '../../../services/todos';

export default function TodoList({createdTodo}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await services.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  // useEffect (() => {
  //   console.log();
  // }), [todos]

  useEffect(() => {
    setTodos(actualState => [...actualState, createdTodo] )
  }),[createdTodo]

  return (
  <ul>
    {todos.map((item => {
      return <TodoItem key={item.id} user={item}/>
    }))}
  </ul>
  )
}
