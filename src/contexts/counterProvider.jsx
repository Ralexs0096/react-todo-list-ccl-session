import { createContext, use, useState } from 'react';

const defaultValue = {
  counter: 0,
  increase: () => {
    console.log('TEST');
  }
};

export const CounterContext = createContext(defaultValue);

export const useCounterContext = () => use(CounterContext);

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(50);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        increase
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

// export const useCounterContext = () => use(CounterContext);
