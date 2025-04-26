import { useEffect, useState } from 'react';
import ChildrenComponent from './ChildrenComponent';

const Input = () => {
  const [input, setInput] = useState('');

  // useEffect(
  //   () => {}, // callback effect
  //   [] // dependencies array
  // )

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/ability/1');
      const data = await response.json();
      console.log(data.pokemon);
    };

    fetchPokemons();
  }, []);

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
      {input.length > 5 && input.length < 10 ? <ChildrenComponent /> : null}
    </>
  );
};

export default Input;
