import React from 'react';
import { useCounterContext } from '../contexts/counterProvider';

const ChildrenComponent = () => {
  const { counter, increase } = useCounterContext();
  // useEffect(() => {
  //   console.log('Children component mounted');

  //   return () => {
  //     // cleanup function
  //     console.log('Component unmounted');
  //   };
  // }, []);

  return (
    <div className="bg-violet-200">
      <h1>Children</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default ChildrenComponent;
