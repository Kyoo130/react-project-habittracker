import React, {useRef} from 'react';

const HabitAddForm = (props) => {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  console.log('habitAddForm');
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;

