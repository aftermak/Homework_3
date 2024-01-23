import  { useState, useEffect, useMemo} from 'react';

import service from '../service/todos';

import { TODOS_FILTER_COMPLETED, TODOS_FILTER_PROGRESS } from '../constants/const';

function useTodoList(createdTodo, updatedTodo, setForUpdateTodo, todosFilter, setProgress) {
    const [todos, setTodos] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useMemo(() => todos.sort((a,b) => b.completed - a.completed), [todos]);

    useEffect(() => {
        (async () => {
          const response = await service.get();
          setTodos(response.slice(0, 10));
        })()
      }, []);
    
      useEffect(() => {
        if(Object.keys(createdTodo).length){
          setTodos(actualState => [...actualState, createdTodo])
        }
      }, [createdTodo]);
    
      useEffect(() => {
        setTodos((actualState) => actualState.map((item) => {
          if(item.id === updatedTodo.id) item.title = updatedTodo.title
          return item
        }))
      }, [updatedTodo]);

      useEffect(()=>{
        setFilteredList(todos)
        setProgress(todos)
      }, [todos])
    
      useEffect(()=>{
        switch (todosFilter) {
          case TODOS_FILTER_COMPLETED:
            setFilteredList(todos.filter((item)=>item.completed))
            break;
          case TODOS_FILTER_PROGRESS:
            setFilteredList(todos.filter((item)=>!item.completed));
            break;
        
          default:
            setFilteredList(todos);
        }
    }, [todos, todosFilter]);

    const handleItemDelete = async (id) => {
        try {
          await service.delete(id);
          setTodos((actualState) => actualState.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      }  
    
      const handleItemChecked = async (todo) => {
        let response = await service.patch(todo.id, {completed: !todo.completed })
        setTodos((actualState) => actualState.map((item) => {
          if(item.id === todo.id) item.completed = response.completed
          return item
        }))
      }
    
      const handleItemUpdate = async (todo) => {
        setForUpdateTodo({
          id: todo.id,
          title: todo.title,
        })
      }
  

  return [filteredList, handleItemDelete, handleItemChecked, handleItemUpdate]
  
}

export default useTodoList