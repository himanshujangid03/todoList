import React, { useState } from "react";
import TodoMain from "./Components/TodoMain";
import TodoItem from "./Components/TodoItem";
import AddNewList from "./Components/AddNewList/AddNewList";

const Dummy_List = [
  {
    id: "e1",
    title: "Toilet Paper",

    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",

    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [newList, setNewList] = useState(Dummy_List);

  const addListHanlder = (todo) => {
    setNewList((prevNewList) => {
      return [todo, ...prevNewList];
    });
  };

  const deleteHandler = (todoId) => {
    setNewList((prevNewList) => {
      const updatedList = prevNewList.filter((todo) => todo.id !== todoId);
      return updatedList;
    });
  };

  const [renderTodo, setRenderTodo] = useState(false);

  const showInputHandler = () => {
    setRenderTodo(true);
  };

  const removeInputHandler = () => {
    setRenderTodo(false);
  };

  return (
    <div>
      {!renderTodo && <AddNewList onAddList={showInputHandler} />}
      {renderTodo && (
        <TodoMain onAddList={addListHanlder} onCancel={removeInputHandler} onDeleteItem={deleteHandler} />
      )}
      <TodoItem items={newList} />
    </div>
  );
};

export default App;
