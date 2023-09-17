import React, { useState } from "react";
import "./TodoMain.css";
import '../Components/Ui/animate.css'

const TodoMain = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const textHandler = (event) => {
    setEnteredText(event.target.value);
    if(event.target.value.trim().length > 0) {
      setIsValid(true)
    }
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredText("");
    setEnteredDate("");

    if(enteredText.trim().length === 0) {
      setIsValid(false)
      return;
    }


    const listData = {
      title: enteredText,
      date: new Date(enteredDate),
      id: Math.random().toString()
    };
    console.log(listData)
    props.onAddList(listData);
  };

  return (
    <div className="card">
      <form onSubmit={submitHandler}>
        <div className="card__form">
          <div className="card__form__label">
            <label>Things to do</label>
          </div>
          <div className="card__form__input">
            <label>Title</label>
            <input value={enteredText} style={{backgroundColor: !isValid ? 'rgb(177, 0, 0)' : 'transparent',color: 'white'}} onChange={textHandler} type="text" />
            <label>Date</label>
            <input value={enteredDate} onChange={dateHandler} type="date" />
          </div>
         <div className="card-form-btn"> <button onClick={props.onCancel} className="card__form__button1" type="button">
            cancel
          </button>
          <button className="card__form__button2" type="submit">
            Add Goals
          </button></div>
        </div>
      </form>
    </div>
  );
};

export default TodoMain;
