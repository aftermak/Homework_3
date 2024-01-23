import React from 'react';
import { TODOS_FILTER_ALL, TODOS_FILTER_COMPLETED, TODOS_FILTER_PROGRESS  } from '../../constants/const';

export default function Filter({todosFilter, setTodosFilter}) {
    const handleSelect = e => setTodosFilter(e.target.value);
  return (
    <select name="filter" id="filter" defaultValue={todosFilter} onChange={handleSelect}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_PROGRESS}>In Progress</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
    </select>
  )
}
