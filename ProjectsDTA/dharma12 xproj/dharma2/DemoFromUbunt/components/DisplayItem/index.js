import React from 'react'
import './index.css'

function DisplayItem(props) {

const handleDelete = async () => {
    console.log(props.ItemDetails.id)
    const url = `192.168.104.178:8080/notesdelete/${props.id}`
    const instructions = {
        method: "DELETE"
    }
    await fetch(url,instructions)
    
}


  return (
    <li className='items-container'>
      <p>{props.ItemDetails.notes}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default DisplayItem
