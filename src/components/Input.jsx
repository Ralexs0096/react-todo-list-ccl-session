import React, { useState } from 'react';
import Children from './Children';

const Input = () => {
  const [counter, setCounter] = useState(10);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Julio',
    lastName: 'Martinez',
    age: 20
  });

  const increment = () => {
    setCounter(counter + 1);
    // setUserInfo({ ...userInfo, firstName: 'Alex' });
    setUserInfo((prev) => ({
      ...prev,
      firstName: 'Alvison'
    }));
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="input-container">
        <input className="input" type="text" placeholder="Insert a TO-DO" />
        <h3>{counter}</h3>
        <h3>
          {userInfo.firstName} - {userInfo.lastName}
        </h3>
        <button className="add-todo" onClick={decrement}>
          -
        </button>
        <button className="add-todo" onClick={increment}>
          +
        </button>
      </div>
      <Children />
    </>
  );
};

export default Input;
