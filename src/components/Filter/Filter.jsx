import React from 'react';
import { TODOS_FILTER_ALL, TODOS_FILTER_COMPLETED, TODOS_FILTER_PROGRESS } from '../../constants/const';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ todosFilter, setTodosFilter }) {
  const handleSelect = e => setTodosFilter(e.target.value);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small" >
      <InputLabel id="demo-simple-select-label" >Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={todosFilter}
        label="Filter"
        onChange={handleSelect}
      >
        <MenuItem value={TODOS_FILTER_ALL} >All</MenuItem>
        <MenuItem value={TODOS_FILTER_PROGRESS} >In Progress</MenuItem>
        <MenuItem value={TODOS_FILTER_COMPLETED} >Completed</MenuItem>
      </Select>
    </FormControl>

  )
}
