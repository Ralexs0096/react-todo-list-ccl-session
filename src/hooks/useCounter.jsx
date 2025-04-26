import { useState } from 'react';

export const useCounter = (initialValue = 20) => {
  const [counter, setCounter] = useState(initialValue);
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter: counter,
    increase: increase,
    decrease,
    reset
  };
};
