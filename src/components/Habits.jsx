import React from 'react';
import Habit from "./Habit";

const Habits = () => {
  const habits = [
    { id: 1, name: 'Reading', count: 0},
    { id: 2, name: 'Running', count: 0},
    { id: 3, name: 'Coding', count: 0},
  ]
  return (
    <ul>
      {
        habits.map(habit => <Habit key={habit.id} habit={habit} />)
      }
    </ul>
  );
};

export default Habits;
