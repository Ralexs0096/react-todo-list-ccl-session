import { useEffect, useState } from 'react';
import Children from './Children';

const Input = () => {
  const [input, setInput] = useState('');

  // useEffect(
  //   () => {}, // callback effect
  //   [] // dependencies array
  // )

  useEffect(() => {
    // side effects
    console.log('Component mounted');
    if (input.length > 6) {
      console.log('test');
    }
  }, [input]);

  return (
    <>
      <div className="input-container">
        <input
          className="input"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Insert a TO-DO"
        />

        <button className="add-todo">Add</button>
      </div>
      {/* conditional rendering */}
      {input.length > 5 && input.length < 10 ? <Children /> : null}
    </>
  );
};

export default Input;
