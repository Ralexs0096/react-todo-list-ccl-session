import './index.css';
import CounterProvider, { useCounterContext } from './contexts/counterProvider';
import ChildrenComponent from './components/ChildrenComponent';

const INITIAL_VALUE = 5;

const CounterComponent = () => {
  const { counter, increase } = useCounterContext();
  // const { counter, decrease, increase, reset } = useCounter(INITIAL_VALUE);
  return (
    <div className="bg-amber-100">
      <h1 className="text-3xl text-red-700">{counter}</h1>
      {/* <button
        onClick={decrease}
        className="bg-violet-600 rounded-2xl p-3 text-white mr-1"
      >
        -1
      </button> */}
      {/* <button
        onClick={reset}
        className="bg-violet-600 rounded-2xl p-3 text-white mr-1"
      >
        Reset
      </button> */}
      <button
        onClick={increase}
        className="bg-violet-600 rounded-2xl p-3 text-white mr-1"
      >
        +1
      </button>

      <hr />
      <ChildrenComponent />
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <>
        <CounterComponent />
      </>
    </CounterProvider>
  );
};

export default App;
