import React, { useState } from 'react';
import './style.css';

import TodoList from './TodosList/TodoList';
import ColorPicker from '../ColorPicker/ColorPicker';
import ProgressBar from '../ProgressBar/ProgressBar';
import Filter from '../Filter/Filter';

import { TODOS_COLOR, TODOS_FILTER_ALL } from '../../constants/const';
import useLocalStorage from '../../hooks/useLocalStorage';
import ModalCreateTodo from '../Todos/ModalCreateTodo/ModalCreateTodo';
import ModalUpdateTodo from './ModalUpdateTodo/ModalUpdateTodo'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar'; import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddBox from '@mui/icons-material/AddBox';
import { AddTask } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [forUpdateTodo, setForUpdateTodo] = useState({});
  const [updatedTodo, setUpdatedTodo] = useState();
  const [progress, setProgress] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [color, setColor] = useLocalStorage('todosColor', TODOS_COLOR);
  const [todosFilter, setTodosFilter] = useLocalStorage('todosFilter', TODOS_FILTER_ALL);

  return (
    <>
      <AppBar position="static" sx={{ mb: 3, p: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
          <Box display={'flex'}>
            <AddTask sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ mr: 5 }}>
              ToDo List
            </Typography>
          </Box>
          <ProgressBar progress={progress} />
          <Button color="inherit" variant='outlined' startIcon={<AddBox />} onClick={() => setOpenCreate(true)}>Add ToDo</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={20} sx={{ p: 4 }}>

          <Box sx={{ width: 400, ml: 'auto' }}>
            <Item sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter} />
              <ColorPicker color={color} setcolor={setColor} />
            </Item>
          </Box>

          <Typography variant="h4" component="h2" fontWeight={600} >
            {todosFilter}
          </Typography>

          <ModalCreateTodo openCreate={openCreate} setOpenCreate={setOpenCreate} setCreatedTodo={setCreatedTodo} />
          <ModalUpdateTodo forUpdateTodo={forUpdateTodo} setUpdatedTodo={setUpdatedTodo} setForUpdateTodo={setForUpdateTodo} />

          <TodoList
            createdTodo={createdTodo}
            updatedTodo={updatedTodo}
            setForUpdateTodo={setForUpdateTodo}
            color={color}
            todosFilter={todosFilter}
            setTodosFilter={setTodosFilter}
            setProgress={setProgress}
          />
        </Paper>
      </Container>
    </>
  )
}
