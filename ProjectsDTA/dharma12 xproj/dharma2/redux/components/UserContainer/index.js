import React from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../../redux'

function UserContainer({userData,fetchUsers}) {

React.useEffect(() => {
    fetchUsers()
},[])

 console.log('asfnnjaf',userData)

  return (
      <div>
         {userData.loading ? (<h1>Loading...</h1>) : 
         userData.error ? (<h1>{userData.error}</h1>) : (

            <div>
                <h1>User List</h1>
                {userData && userData.data.map(user => <p>{user.name}</p>)}
            </div>

         )}
      </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }

}


export default connect(mapStateToProps,mapDispatchToProps) (UserContainer)
