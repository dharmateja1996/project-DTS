import {Link} from 'react-router-dom'
import React from 'react'


function Heading () {
  return (
    <div>
        <Link to='/'>
        <p>Home</p>
        </Link>

        <Link to='/login'>
        <p>Login</p>
        </Link>
        

    </div>
  )
}

export default Heading 
