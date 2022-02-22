
import { ADD_TODO,DELETE_TODO } from "./todoActionTypes";

const demoList  = [
    {id:1,task:"Need to complete redux"},{id:2,task:"Routing"},{id:3,task:"Need to use Switching component"}
]


const initialState = {
    todoList:[...demoList]
}


const todoReducer = (state = initialState,action) => {
    console.log(action.payload)
    
    switch (action.type) {
        case ADD_TODO:
            
        return {
                ...state,
                todoList: [...state.todoList,action.payload]
        }

        case DELETE_TODO:

            const filteredList = state.todoList.filter(eachTodo => eachTodo.id !== action.payload)
            console.log(filteredList)

        return {
            ...state,
            todoList:[...filteredList]
        }
    
        default:
            return state
    }

}

export default todoReducer