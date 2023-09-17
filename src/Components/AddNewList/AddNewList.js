import React from "react";
import "./AddNewList.css";
import '../Ui/animate.css'

const AddNewList = (props) => {
    return (
        <div className="newlist animate">
          <div className="newlist__btn">
            <button  onClick={props.onAddList}>
              Add List
            </button>
          </div>
        </div>
    )
};

export default AddNewList;
