import React, { useState } from "react";
import "../02-useEffect/effects.css";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks.jsx";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      RealExampleRef
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
    </div>
  );
};

export default RealExampleRef;
