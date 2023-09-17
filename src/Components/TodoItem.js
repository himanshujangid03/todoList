import React, { useState } from "react";
import "./TodoItem.css";
import TodoNoList from "./TodoNoList";
import TodoFilter from "./TodoFilter";
import '../Components/Ui/animate.css'

const TodoItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredListByYear = props.items.filter((list) => {
    return list.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div className="card__list animate">
      <div className="card__list__todofilter">
        <TodoFilter selected={filteredYear} onChangeYear={yearChangeHandler} />
      </div>
      <div className="card__list__todolist>">
        <TodoNoList list={filteredListByYear} />
      </div>
    </div>
  );
};

export default TodoItem;
