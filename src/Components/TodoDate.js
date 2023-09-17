import "./TodoDate.css";

const TodoDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
 
  return (
    <div className="Tododate">
      <div className="Tododate__month">{month}</div>
      <div className="Tododate__year">{year}</div>
      <div className="Tododate__day">{day}</div>
    </div> 
  );
};

export default TodoDate;
