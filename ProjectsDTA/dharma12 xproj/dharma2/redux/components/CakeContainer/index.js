import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../redux'

function CakeContainer(props) {
    
  return (
    <div>
        <h4>Cake Container</h4>
        <p>no.of.Cakes: {props.noOfCakes}</p>
        <button onClick={props.buyCake}>Add Cakes</button>
        <hr/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
