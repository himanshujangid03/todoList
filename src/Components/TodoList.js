import React from "react";
import TodoDate from "./TodoDate";
import "./TodoList.css";
import '../Components/Ui/animate.css'

const TodoList = (props) => {
  return (
    <div className="TodoList">
      <div className="TodoList__title">{props.title}</div>
      <div className="TodoList__date">
        <TodoDate date={props.date} />
      </div>
    </div>
  );
};

export default TodoList;
