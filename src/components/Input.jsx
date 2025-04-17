import React, { useState } from 'react';
import Children from './Children';

const Input = () => {
  const [input, setInput] = useState({
    input: '',
    inputTwo: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'input') {
      setInput((prev) => {
        return {
          ...prev,
          input: e.target.value
        };
      });
    }

    if (e.target.name === 'inputTwo') {
      setInput({
        ...input,
        inputTwo: e.target.value
      });
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          className="input"
          value={input.input}
          name="input"
          onChange={handleChange}
          type="text"
          placeholder="Insert a TO-DO"
        />

        <input
          className="input"
          value={input.inputTwo}
          name="inputTwo"
          onChange={handleChange}
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
