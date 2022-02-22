import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo} from "../../redux/";

function UsinghooksTodoItem(props) {
  const dispatch = useDispatch();


  return (
    <li className="todo-item-container">
      <p className="task-description">{props.todoDetails.task}</p>
      <button onClick={() => dispatch(deleteTodo(props.todoDetails.id))} className="delete-button">
        x
      </button>
    </li>
  );
}

export default UsinghooksTodoItem;
