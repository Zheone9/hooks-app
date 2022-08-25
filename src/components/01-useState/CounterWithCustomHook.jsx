import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increase, decrease, reset } = useCounter();
  const [factor, setFactor] = useState(1);

  const handleChange = (e) => {
    if (e.target.value === "" || e.target.value <= 0 || isNaN(e.target.value)) {
      setFactor(1);
    } else {
      setFactor(Number(e.target.value));
    }
  };
  return (
    <>
      <h1>
        Counter: <b>{state}</b>
      </h1>
      <hr />
      <p className="p-factor">
        Current factor: <b>{factor}</b>{" "}
      </p>
      <button className="btn btn-primary" onClick={() => increase(factor)}>
        +
      </button>
      <button className="btn btn-primary" onClick={() => decrease(factor)}>
        -
      </button>

      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>

      <input type="text" onChange={handleChange} />
    </>
  );
};

export default CounterWithCustomHook;
