import { useReducer } from "react";
import "../../estilos.css";

const initialState = () => ({
  count: 0,
});

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <div className="Counter">
      <h2>Count useReducer</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}

export default Counter;
