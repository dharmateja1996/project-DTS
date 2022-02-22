import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../../redux'

function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <p>No.of.cakes:{noOfCakes}</p>
      <button onClick={() => dispatch(buyCake())}>Add Cakes</button>
      <hr/>
    </div>
  )
}

export default HooksCakeContainer
