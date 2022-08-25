import { useState } from "react";

const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState);

  const increase = (factor = 1) => {
    setCounter(counter + factor);
  };

  const decrease = (factor = 1) => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increase,
    decrease,
    reset,
  };
};

export default useCounter;
