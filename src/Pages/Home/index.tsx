import * as Icons from 'react-icons/bs';
import { useImmerReducer } from 'use-immer';
// Types
type StateType = {
  count: number;
};
const initialState: StateType = {
  count: 0,
};

type actionType = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: { count: number };
};

// Reducer
const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'INCREMENT':
      state.count = state.count + action.payload.count;
      break;
    case 'DECREMENT':
      state.count = Math.max(0, state.count - action.payload.count);
      break;
    default:
      return state;
  }
};

const HomePage = () => {
  // State
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  // Action
  const action = {
    handleIncrement(count: number): void {
      dispatch({ type: 'INCREMENT', payload: { count } });
    },
    handleDecrement(count: number): void {
      dispatch({ type: 'DECREMENT', payload: { count } });
    },
  };

  return (
    <div className="flex flex-row m-2 space-x-4 items-center justify-center">
      <button
        className="px-5 py-2.5 rounded-lg text-xl capitalize bg-red-500 hover:bg-red-600 transition ease-in-out duration-150"
        onClick={() => action.handleDecrement(1)}
      >
        {<Icons.BsDash size="1.4rem" />}
      </button>
      <span>{state.count}</span>
      <button
        className="px-5 py-2.5 rounded-lg text-xl capitalize bg-red-500 hover:bg-red-600 transition ease-in-out duration-150"
        onClick={() => action.handleDecrement(1)}
      >
        {<Icons.BsPlus size="1.4rem" />}
      </button>
    </div>
  );
};

export default HomePage;
