

import { v1 as uuidv1 } from 'uuid';



export const addtodo = (inputValue,todos,setTodos,setInputValue) =>{
    // console.log(inputValue)
    const update = [{todosText:inputValue, id: uuidv1() },...todos];
    setTodos(update)
    setInputValue("")
    
  }
  export const deleteTodo = (id,todos,setTodos) => {
    const delet = todos.filter((i)=> i.id !== id )
    setTodos(delet)
  }

  export const done = (id,setCompeleted,completed) =>{
    
      if(completed.includes(id)){
        setCompeleted(completed.filter((i) => i !==id))
      }
      else{
        setCompeleted([...completed, id])
      }
    
  }