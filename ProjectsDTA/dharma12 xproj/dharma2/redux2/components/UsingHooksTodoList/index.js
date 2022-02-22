import React from "react";
import { useSelector } from "react-redux";

import UsinghooksTodoItem from "../UsinghooksTodoItem";


function UsingHooksTodoList() {
  const todoList = useSelector((state) => state.todoList);

  

  return (
    <div>
      <p>UsingHooksTodoList</p>
      <p>useSelector: useDispatch</p>

      {todoList.map((eachTodo) => (
        <UsinghooksTodoItem key={eachTodo.id} todoDetails={eachTodo} />
      ))}
      
    </div>
  );
}

export default UsingHooksTodoList;
