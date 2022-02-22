import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes"


const initialState = {
    loading: false,
    data:[],
    error:''
}



const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            
            return {
                ...state,
                loading: true
            }
            
            case FETCH_USER_SUCCESS:
            
            return {
                 ...state,
                data:action.payload,
                loading: false,
                error: ''
            }  
            
            
            case FETCH_USER_FAILURE:
            
            return {
                ...state,
                data:[],
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default userReducer