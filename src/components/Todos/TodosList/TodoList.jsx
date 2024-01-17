import React, { useState, useEffect } from 'react';
import TodoItem from '../TodosItem/TodoItem';
import services from '../../../services/todos';

export default function TodoList({createdTodo}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await services.get();
      setTodos(response.slice(0, 10));
    })()
  }, []);

  useEffect(() => {
    if(Object.keys(createdTodo).length){
      setTodos(actualState => [...actualState, createdTodo])
    }
  }, [createdTodo]);

  return (
  <ul>
    {todos.map(((item, index) => {
      return <TodoItem key={index} user={item}/>
    }))}
  </ul>
  )
}
