import React, { useRef } from 'react';
import Children from './Children';

const Input = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputRef.current.name);
  };

  return (
    <>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="input"
          name="myInput"
          type="text"
          placeholder="Insert a TO-DO"
        />

        <button className="add-todo">Add</button>
      </form>
      <Children />
    </>
  );
};

export default Input;
