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

  const clickFn = async (id) => {
    try {
      await services.delete(id);
      setTodos((actualState) => actualState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }  

  return (
  <ul>
    {todos.map(((item, index) => {
      return <TodoItem key={index} user={item} clickFn={() => clickFn(item.id)}/>
    }))}
  </ul>
  )
}
