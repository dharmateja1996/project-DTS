import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../../redux'


function IceCreamContainer(props) {
  return (
    <div>
        <h4>IceCreamContainer</h4>
        <p>No.Of.Cakes : {props.noOfIceCreams}</p>
        <button onClick={() => props.buyIceCream}>Buy IceCream</button>
        <hr/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        noOfIceCreams: state.iceCream.noOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())

    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamContainer)
