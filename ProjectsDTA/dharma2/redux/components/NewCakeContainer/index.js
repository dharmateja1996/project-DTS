import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = React.useState(1)
  return (
    <div>
        <h5>using Input specifying</h5>
        <p>no.of .cakes:{props.noOfCakes}</p>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value) }/>
        <button onClick={() => props.buyCake(number)}>Buy Cake</button>

    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
} 

const mapDispatchToProps = (dispatch) =>{
        return {
            buyCake: (number) => dispatch(buyCake(number))
        }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)
