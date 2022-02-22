import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { addTodo } from '../../redux/Todo/todoAction'



function TodoForm() {

  const [input, setInput] = React.useState()

  const todoList = useSelector(state => state.todoList)

  const dispatch = useDispatch()


  

  console.log(input)

  

  const onSubmitForm = (e) => {
    e.preventDefault()
    const newTask = {
      id: todoList.length + 1,
      task: input
    }

    dispatch(addTodo(newTask))
    

  } 


    
  return (
    <div>
        
        <form onSubmit={onSubmitForm}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button>Add</button>
        </form>
      
    </div>
  )
}

export default  TodoForm
