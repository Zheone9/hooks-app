import React, { useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../hooks/useCounter.js";
import Small from "./Small";
const Memorize = () => {
  const { counter, increase } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>

      <hr />
      <button className="btn btn-primary" onClick={() => increase()}>
        Incrementar
      </button>
      <button
        className="btn btn-primary ml-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
