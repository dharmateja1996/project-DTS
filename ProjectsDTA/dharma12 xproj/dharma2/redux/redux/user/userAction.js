import axios from 'axios'

import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes"

export const fetchUserRequest = () =>{
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) =>{
    return {
        type:FETCH_USER_SUCCESS,
        payload: users,
       
    }
}

export const fetchUserFailure = (error) =>{
    return {
        type:FETCH_USER_FAILURE,
        payload: error
    }
}


export const  fetchUsers = () => {


    return (dispatch) => {
        dispatch(fetchUserRequest)

        axios("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
            
        })
        .catch(error => {
            const errorMs = error.message
            dispatch(fetchUserFailure(error))
        })
    }
}