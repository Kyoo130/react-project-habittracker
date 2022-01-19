import React, { useState } from "react";
import Habit from "./Habit";

const Habits = ({habits}) => {

  return (
    <ul>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </ul>
  );
};

export default Habits;
