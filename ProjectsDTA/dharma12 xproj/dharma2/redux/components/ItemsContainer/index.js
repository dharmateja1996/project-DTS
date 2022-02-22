import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../../redux'

function ItemsContainer(props) {
    console.log(props)
  return (
    <div>
        <h5>Items Container</h5>
        <p>Items: {props.item}</p>
        <button onClick={() => props.buyItem}>Buy Items</button>
        <hr/>
    </div>
  )
}
const mapStateToProps = (state,ownProps) => {

    const itemState = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCreams

    return {
        item : itemState
    }
}


const mapDispatchToProps = (dispatch,ownProps) => {
    const dispatchFunction = ownProps.cake ? dispatch(buyCake()) : dispatch(buyIceCream())

    return {
        buyItem : () =>  dispatchFunction
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (ItemsContainer)
