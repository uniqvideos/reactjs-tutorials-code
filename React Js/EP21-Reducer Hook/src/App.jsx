import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let COUNTER_ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
  };

  let reducer = (state, counterAction) => {
    switch (counterAction.type) {
      case COUNTER_ACTION.INCREMENT:
        return { ...state, count: state.count + 1 };
      case COUNTER_ACTION.DECREMENT:
        return { ...state, count: state.count - 1 };
      case COUNTER_ACTION.RESET:
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Use Reducer Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <p>{count}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch({ type: COUNTER_ACTION.INCREMENT })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}>
          Decrement
        </button>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
