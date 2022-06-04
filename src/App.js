import React, { useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import { addtodo, deleteTodo, done } from "./Helper";

  import './style.css'
const App = () => {
  const [inputValue, setInputValue] = useState('')
  const[todos, setTodos] = useState([])
  const[completed,setCompeleted] = useState([])

  // const addtodo = () =>{
  //   // console.log(inputValue)
  //   const update = [{todosText:inputValue, id: uuidv1() },...todos];
  //   setTodos(update)
  //   setInputValue("")
    
  // }
  // const deleteTodo = (id) => {
  //   const delet = todos.filter((i)=> i.id !== id )
  //   setTodos(delet)
  // }

  // const done = (id) =>{
    
  //     if(completed.includes(id)){
  //       setCompeleted(completed.filter((i) => i !==id))
  //     }
  //     else{
  //       setCompeleted([...completed, id])
  //     }
    
  // }
  console.log(completed)
  
  return (
    <div className="main__container">
      
        <div className="head__container">
          <h1>Todo Application</h1>
        </div>

        <div className="input__container">  
          <input type="text" value={inputValue} onChange ={(e)=>setInputValue(e.target.value)} />
          <button onClick={()=>addtodo(inputValue,todos,setTodos,setInputValue)}>Add Todo</button>
        </div>

        {
          todos.map((v)=>{
            
            return(
           <div className={`output__container ${`${completed.includes(v.id) ? "done__class" : null}`}`} key = {v.id}>
             {/* if(completed.includes(v.id)){
               completed.filter((id) => i.id !==v.id)
             }
             else{
                setCompeleted([...completed,v.id])
             } */}
          <p>{v.todosText}</p>
          <section >
            <button className="btn__delete" onClick={() =>deleteTodo(v.id,todos,setTodos)}>Delete</button>
            <button className="btn__done" onClick={()=>done(v.id,setCompeleted,completed)}>Done</button>
          </section>
        </div>
            )
          })  
        }
        
        
    </div>
  );
}

export default App;
