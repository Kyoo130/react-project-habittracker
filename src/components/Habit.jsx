import React from "react";

const Habit = (props) => {
  const {name, count} = props.habit;
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase">
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease">
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
