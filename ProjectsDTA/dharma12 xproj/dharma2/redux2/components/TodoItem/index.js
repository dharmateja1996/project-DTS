import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../redux'


import './index.css'

function TodoItem(props) {
  console.log("from todoItem",props)
    
  return (
    <li className='todo-item-container'>
        <p className='task-description'>{props.todoDetails.task}</p>
        <button className='delete-button' onClick={() => props.dispatch(deleteTodo(props.todoDetails.id))}>x</button>
    </li>
  )
}


const mapDispatchToProps = dispatch => {
  
  return {
    dispatch:(id) => dispatch(deleteTodo(id))

  }
  
}
 


export default connect(mapDispatchToProps) (TodoItem)

