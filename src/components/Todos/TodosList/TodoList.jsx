import React from 'react';
import TodoItem from '../TodosItem/TodoItem';
import useTodoList from '../../../hooks/useTodoList';

export default function TodoList({
  createdTodo, 
  updatedTodo, 
  setForUpdateTodo, 
  color, 
  todosFilter, 
  setProgress
}) {

  const [
    filteredList, 
    handleItemDelete, 
    handleItemChecked, 
    handleItemUpdate
  ] = useTodoList(createdTodo, updatedTodo, setForUpdateTodo, todosFilter, setProgress);
    
  return (
  <ul style={{color: color}}>
    {filteredList.map(((item, index) => {
      return <TodoItem 
        key={index} user={item} 
        itemDelete={() => handleItemDelete(item.id)} 
        itemChecked={() => handleItemChecked(item)}
        itemUpdate={() => handleItemUpdate(item)}
        checked={item.completed}
        />
    }))}
  </ul>
  )
}
