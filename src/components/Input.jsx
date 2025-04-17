import React, { useRef } from 'react';
import Children from './Children';

const Input = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <div className="input-container">
        <input
          ref={inputRef}
          className="input"
          type="text"
          placeholder="Insert a TO-DO"
        />

        <button className="add-todo" onClick={handleClick}>
          Add
        </button>
      </div>
      <Children />
    </>
  );
};

export default Input;
