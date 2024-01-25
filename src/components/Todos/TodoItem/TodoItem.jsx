import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

export default function TodoItem({ user, itemDelete, itemChecked, itemUpdate, checked }) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={itemChecked} sx={{ flexGrow: 1 }} >
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          onChange={itemChecked}
          size='medium'
          color="success"
        />
        <ListItemText primary={user.title} />
      </ListItemButton>

      <ListItemButton onClick={itemUpdate} sx={{ flexGrow: 0 }} >
        <IconButton edge="end" aria-label="delete">
          <Edit fontSize='medium' color='primary' />
        </IconButton>
      </ListItemButton>

      <ListItemButton onClick={itemDelete} sx={{ flexGrow: 0 }}>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon fontSize='medium' color='error' />
        </IconButton>
      </ListItemButton>
    </ListItem>
  )
}
