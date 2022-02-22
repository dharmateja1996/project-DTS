import { ADD_TODO, DELETE_TODO } from "./todoActionTypes";

export const addTodo = (newTask) => {
  return {
    type: ADD_TODO,
    payload: newTask
  };

};

export const deleteTodo = (id) => {
    
  return {
    type: DELETE_TODO,
    payload: id
  };
};
