import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { buyIceCream } from '../../redux'


function HooksIceCreamContainer() {

    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)

    const dispatch = useDispatch()



  return (
    <div>
        <p>No.of.IceCreams: {noOfIceCreams}</p>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        <hr/>
    </div>
  )
}

export default HooksIceCreamContainer
