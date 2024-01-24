import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

export default function TodoItem({ user, itemDelete, itemChecked, itemUpdate, checked }) {
  return (

    <ListItem disablePadding>
      <ListItemButton onClick={itemChecked} sx={{flexGrow:1}} >
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          onChange={itemChecked}
        />
        <ListItemText primary={user.title} />
      </ListItemButton>

      <ListItemButton  onClick={itemUpdate} sx={{flexGrow:0}} >
        <IconButton edge="end" aria-label="delete" sx={{border: 1}}>
          <Edit fontSize='medium' color='primary' />
        </IconButton>
      </ListItemButton>

      <ListItemButton  onClick={itemDelete} sx={{flexGrow:0}}>
        <IconButton edge="end" aria-label="delete" sx={{border: 1}}>
          <DeleteIcon fontSize='medium' color='error'/>
        </IconButton>
      </ListItemButton>

      



    </ListItem>

    // <li>
    //   <input type='checkbox' onChange={itemChecked} checked={checked}></input>
    //   {user.title}
    //   <button onClick={itemUpdate}>Edit</button>
    //   <button onClick={itemDelete}>Delete</button>
    // </li>

  )
}
