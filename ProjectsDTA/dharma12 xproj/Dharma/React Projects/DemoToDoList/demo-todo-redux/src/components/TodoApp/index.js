import React from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import UsingHooksTodoList from '../UsingHooksTodoList'


import './index.css'

function TodoApp() {
  return (
    <div className='todo-app'>
        <h1>Todo App</h1>
        
        <TodoForm/>
        <UsingHooksTodoList/>
        <TodoList/>
      
    </div>
  )
}

export default TodoApp
