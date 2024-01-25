import React, { useState } from 'react';
import { v4 } from 'uuid';
import service from '../../../service/todos';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export default function BasicModal({ openCreate, setOpenCreate, setCreatedTodo }) {
  const iD = v4();

  const [newTodo, setNewTodo] = useState({
    id: iD,
    title: 'Your text',
    completed: false,
  });

  const handleTitle = (event) => {
    setNewTodo((actualState) => ({ ...actualState, title: event.target.value, id: iD }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await service.post(newTodo);
    setCreatedTodo(response);
    setCreatedTodo((actualState) => ({ ...actualState, id: iD }))
    setOpenCreate(false)
  };

  return (
    <div>
      <Modal
        open={openCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component='form' onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="fullWidth"
            label="Create Your new ToDo"
            placeholder="Enter the text here"
            multiline
            maxRows={4}
            variant='outlined'
            onChange={handleTitle}
            size='normal'
            margin='dense'
          />
          <Button variant="contained" type='submit' sx={{ mt: 2, pl: 3, pr: 3 }} >Create</Button>
        </Box>
      </Modal>
    </div>
  );
}
