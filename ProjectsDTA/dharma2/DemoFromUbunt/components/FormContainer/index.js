import React, { useState } from 'react'
import './index.css'

function FormContainer() {

  const [inputBookName , setInputBookName] = useState('')
  const [inputAuthorName , setInputAuthorName] = useState('')

const handleBookName = (e) => {
    setInputBookName(e.target.value)
}
const handleAuthorName = (e) => {
  setInputAuthorName(e.target.value)
}

const submitForm = (e) =>{
    e.preventDefault()
}


console.log(inputBookName,inputAuthorName)
  return (
    <div className='form-container-app'>
      <p>FormContainer</p>
      <form onSubmit={submitForm} className='form-container'>
        <input value={inputBookName} 
        onChange={handleBookName} 
        placeholder='Enter Book Name'
        type='text' name='bookName'/>

        <input value={inputAuthorName} 
        onChange={handleAuthorName} 
        placeholder='Enter Author Name'
        type='text' name='authorName'/>
        <button>Save</button>
      </form>
    </div>
  )
}

export default FormContainer
