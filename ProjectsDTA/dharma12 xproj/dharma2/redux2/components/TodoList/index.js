import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'

import './index.css'

function TodoList(props) {
    
    
  return (
    <ul className='todo-list'>
        <p>TodoList</p>
        <p>Using mapStateToProps : mapDispatchToProps</p>

        
        {
            props.todoList.map(eachTodo => <TodoItem key={eachTodo.id} todoDetails= {eachTodo}/>)
        }
        
    </ul>
  )
}


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps) (TodoList)
