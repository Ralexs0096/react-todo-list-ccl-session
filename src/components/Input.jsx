import React from 'react';
import Children from './Children';

const Input = () => {
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          name="input"
          type="text"
          placeholder="Insert a TO-DO"
        />

        <button className="add-todo" onClick={undefined}>
          Add
        </button>
      </div>
      <Children />
    </>
  );
};

export default Input;
