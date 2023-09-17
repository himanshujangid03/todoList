import React from "react";
import "./TodoFilter.css";
import '../Components/Ui/animate.css'

const TodoFilter = (props) => {

  const dropdownYear = (event) => {
    props.onChangeYear(event.target.value);
  };

  

  return (
    <div className="todofilter">
      <div className="todofilter__text">Filter by Year</div>
      <div className="todofilter__dropdown">
        <select value={props.selected} onChange={dropdownYear}>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
