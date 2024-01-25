import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import useTodoList from '../../../hooks/useTodoList';

import List from '@mui/material/List';

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
    <List sx={{ width: '100%', bgcolor: 'background.paper', color: { color } }}>
      {filteredList.map((item, index) => {
        return (
          <TodoItem
            key={index} user={item}
            itemDelete={() => handleItemDelete(item.id)}
            itemChecked={() => handleItemChecked(item)}
            itemUpdate={() => handleItemUpdate(item)}
            checked={item.completed}
          />
        );
      })}
    </List>
  )
};
