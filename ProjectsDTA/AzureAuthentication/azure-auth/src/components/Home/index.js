import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Home () {
  return (
    <div className='home-container'>

      <Link to='/login'>

        <button className='logout-button'>LogOut</button>

        </Link>
    </div>
  )
}

export default Home 
