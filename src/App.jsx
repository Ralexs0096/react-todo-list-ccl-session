import { useState } from 'react';
import './index.css';

// Fragment = <></>

const App = () => {
  const [counter, setCounter] = useState(5); // hook

  return (
    <main>
      <section className="todo-container">
        <h1>My To-Do List {counter}</h1>
        <div className="input-container">
          <input className="input" type="text" placeholder="Insert a TO-DO" />
          <button class="add-todo" onClick={() => setCounter(counter - 1)}>
            -
          </button>
          <button class="add-todo" onClick={() => setCounter(counter + 1)}>
            +
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
