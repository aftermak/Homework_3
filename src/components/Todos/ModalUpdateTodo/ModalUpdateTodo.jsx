import React from 'react';
import services from '../../../service/todos'

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

export default function BasicModal({ forUpdateTodo, setForUpdateTodo, setUpdatedTodo }) {

  const editTitleTodo = (e) => {
    setForUpdateTodo((actualState) => ({
      ...actualState, title: e.target.value
    }))
  }

  const handleUpdateItem = async () => {
    const response = await services.post(forUpdateTodo);
    setForUpdateTodo({});
    setUpdatedTodo({
      id: forUpdateTodo.id,
      title: response.title,
    })
  }

  return (
    <div>
      <Modal
        open={!!Object.keys(forUpdateTodo).length}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            defaultValue={forUpdateTodo.title}
            fullWidth
            id="fullWidth"
            label="Update Your ToDo"
            placeholder="Enter the text here"
            multiline
            maxRows={4}
            variant='outlined'
            size='normal'
            margin='dense'
            onChange={(e) => { editTitleTodo(e) }}
          />
          <Button
            variant="contained"
            type='submit'
            sx={{ mt: 2, pl: 3, pr: 3 }}
            onClick={handleUpdateItem}
          >Update
          </Button>

        </Box>
      </Modal>
    </div>
  );
}