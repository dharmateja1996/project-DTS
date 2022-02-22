import axios from "axios";
import React, { useEffect, useState } from 'react'

import DisplayItem from '../DisplayItem'

import './index.css'


function DisplaySavedNotes() {
  const [data,setData] = useState([])
useEffect(()=>{

  
  
  const fetched = async () => {
    const url = "http://192.168.104.178:8080/notesget"
    /*const options = {
      method: "GET",
      headers: {
        'Accept': '* application/json'
      }
      
    }
   
   const response = await fetch(url,options)
    console.log(response)
    */
try{
  const res = await  axios.get(url)
  setData(res.data)
 

}catch(e){
    console.log(e)
}
  


  

  }
  fetched()

},[])
console.log(data)
  return (
    <div className='display-container'>
      <p>DisplaySavedNotes</p>
      <ul className='content-container'>
        {data.map(eachItem => <DisplayItem key={eachItem.id} ItemDetails={eachItem}/>) }
      </ul>
      
    </div>
  )
}

export default DisplaySavedNotes
