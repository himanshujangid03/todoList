import React from 'react';
import './TodoNoList.css';
import TodoList from './TodoList';

const TodoNoList = (props) => {

  if(props.list.length === 0){
    return <h2 className='TodoNoList__no-data'>No Data Found!</h2>
  }

  return (
    <ul className='TodoNoList__list'>
         {
    props.list.map((el) => (
      <TodoList props title={el.title} date={el.date} key={el.id} />
    ))}
    </ul>
  )

}

export default TodoNoList;